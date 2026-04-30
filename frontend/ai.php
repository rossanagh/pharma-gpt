<?php
/**
 * ============================================================
 * MedicinEvidence — Claude API Proxy (v2 cu streaming + multi-mode)
 * ============================================================
 * IMPORTANT (security):
 * - Do NOT hardcode API keys in this file.
 * - Set environment variable: ANTHROPIC_API_KEY
 *
 * Moduri suportate:
 *  - chat    : chat normal Consultation (streaming/non-streaming)
 *  - drug    : fisa medicament (recunoaste denumiri comerciale)
 *  - quiz    : generator intrebari Rezidentiat
 *  - tutor   : tutor AI pe materie specifica
 *  - vision  : analiza imagini radiologice
 * ============================================================
 */

// ============ CONFIG ============
$API_KEY = getenv('ANTHROPIC_API_KEY') ?: '';
$MODEL = 'claude-sonnet-4-20250514';
$MAX_REQUESTS_PER_HOUR = 60;

if (empty($API_KEY)) {
  header('Content-Type: application/json; charset=utf-8');
  http_response_code(500);
  echo json_encode(['error' => 'Server missing ANTHROPIC_API_KEY']);
  exit;
}

$ALLOWED_ORIGINS = [
    'https://medicinevidence.com',
    'https://www.medicinevidence.com',
    'http://medicinevidence.com',
    'http://www.medicinevidence.com',
    'null', ''
];

// ============ HEADERS ============
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $ALLOWED_ORIGINS) || empty($origin)) {
    header("Access-Control-Allow-Origin: " . ($origin ?: '*'));
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// ============ RATE LIMITING ============
function getClientIp() {
    return $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}
function rateLimitOk($ip, $max) {
    $dir = sys_get_temp_dir() . '/me_ratelimit';
    if (!is_dir($dir)) { @mkdir($dir, 0700, true); }
    $file = $dir . '/' . md5($ip) . '.json';
    $now = time();
    $hourAgo = $now - 3600;
    $data = [];
    if (file_exists($file)) {
        $raw = @file_get_contents($file);
        if ($raw) { $data = json_decode($raw, true) ?: []; }
    }
    $data = array_filter($data, fn($t) => $t > $hourAgo);
    if (count($data) >= $max) return false;
    $data[] = $now;
    @file_put_contents($file, json_encode(array_values($data)));
    return true;
}
$ip = getClientIp();
if (!rateLimitOk($ip, $MAX_REQUESTS_PER_HOUR)) {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests. Try again later.']);
    exit;
}

// ============ INPUT ============
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$mode = $input['mode'] ?? 'chat';
$stream = !empty($input['stream']);
$lang = $input['lang'] ?? 'en';

$langNames = [
    'en'=>'English','ro'=>'Romanian','de'=>'German',
    'fr'=>'French','it'=>'Italian','es'=>'Spanish'
];
$langName = $langNames[$lang] ?? 'English';

// ============ RAG (local knowledge grounding) ============
function ragLoadText() {
    static $cache = null;
    if ($cache !== null) return $cache;
    $path = __DIR__ . '/rag/knowledge.txt';
    if (!file_exists($path)) { $cache = ''; return $cache; }
    $raw = @file_get_contents($path);
    $cache = $raw ? $raw : '';
    return $cache;
}

function ragTokenize($text) {
    $text = mb_strtolower($text ?? '', 'UTF-8');
    $text = preg_replace('/[^\\p{L}\\p{N}]+/u', ' ', $text);
    $parts = preg_split('/\\s+/', trim($text));
    $out = [];
    foreach ($parts as $p) {
        if ($p === '') continue;
        // skip ultra-short tokens
        if (mb_strlen($p, 'UTF-8') < 3) continue;
        $out[] = $p;
    }
    return $out;
}

function ragChunk($text) {
    $text = str_replace("\r\n", "\n", $text);
    $lines = explode("\n", $text);
    $chunks = [];
    $buf = '';
    foreach ($lines as $ln) {
        // keep manual separators as hard chunk boundaries
        if (trim($ln) === '---') {
            if (trim($buf) !== '') $chunks[] = trim($buf);
            $buf = '';
            continue;
        }
        $buf .= $ln . "\n";
        if (mb_strlen($buf, 'UTF-8') > 900) {
            $chunks[] = trim($buf);
            $buf = '';
        }
    }
    if (trim($buf) !== '') $chunks[] = trim($buf);
    // drop tiny chunks
    return array_values(array_filter($chunks, fn($c) => mb_strlen($c, 'UTF-8') > 80));
}

function ragScoreChunk($qTokens, $chunkText) {
    // simple term overlap scoring with light weighting
    $cTokens = ragTokenize($chunkText);
    if (!$cTokens) return 0.0;
    $set = [];
    foreach ($cTokens as $t) $set[$t] = true;
    $score = 0.0;
    foreach ($qTokens as $t) {
        if (isset($set[$t])) $score += 1.0;
    }
    // prefer chunks that contain explicit citation tags like [ESC 2024]
    if (preg_match('/\\[[^\\]]+\\]/', $chunkText)) $score += 0.75;
    return $score;
}

function ragRetrieve($queryText, $topK = 4) {
    $kb = ragLoadText();
    if (!$kb) return [];
    $qTokens = ragTokenize($queryText);
    if (!$qTokens) return [];
    $chunks = ragChunk($kb);
    $scored = [];
    foreach ($chunks as $i => $ch) {
        $s = ragScoreChunk($qTokens, $ch);
        if ($s > 0.0) $scored[] = ['s' => $s, 't' => $ch];
    }
    usort($scored, fn($a,$b) => $b['s'] <=> $a['s']);
    $out = [];
    foreach ($scored as $row) {
        $out[] = $row['t'];
        if (count($out) >= $topK) break;
    }
    return $out;
}

// ============ SYSTEM PROMPT BY MODE ============
function buildSystemPrompt($mode, $input, $langName) {
    // Allow caller to pass a custom system prompt (e.g. from guides AI)
    if (!empty($input['system'])) {
        return $input['system'] . "\n\nAlways respond in $langName.";
    }

    $base = "You are MedicinEvidence AI, clinical decision support for verified European physicians, pharmacists, residents and medical students. "
        . "Always respond in $langName. "
        . "Be precise, evidence-based, concise. "
        . "Use markdown: **bold** for key terms, bullets for lists. "
        . "Cite sources inline like [ESC 2024], [EASD 2024], [EMA], [Cochrane], [NEJM], [Lancet], [PubMed]. ";

    switch ($mode) {
        case 'chat':
            $sys = $base . "You are in CONSULTATION mode for a clinician. "
                . "Tailor answers to patient context if provided. "
                . "Mention renal/hepatic adjustments when relevant for dosing. "
                . "End complex answers with a **Key citations** line. ";
            if (!empty($input['patient_context'])) {
                $pc = $input['patient_context'];
                $ctx = "\n\nPATIENT CONTEXT:\n";
                if (!empty($pc['raw'])) {
                    $ctx .= $pc['raw'] . "\n";
                } else {
                    if (!empty($pc['age'])) $ctx .= "- Age: {$pc['age']}\n";
                    if (!empty($pc['sex'])) $ctx .= "- Sex: {$pc['sex']}\n";
                    if (!empty($pc['weight'])) $ctx .= "- Weight: {$pc['weight']} kg\n";
                    if (!empty($pc['egfr'])) $ctx .= "- eGFR: {$pc['egfr']} ml/min\n";
                    if (!empty($pc['conds'])) $ctx .= "- Conditions: {$pc['conds']}\n";
                    if (!empty($pc['meds'])) $ctx .= "- Current medications: {$pc['meds']}\n";
                }
                $sys .= $ctx . "Tailor EVERY response to this specific patient. Consider renal/hepatic function for dosing, check drug interactions, flag contraindications, and personalise recommendations.";
            }
            return $sys;

        case 'drug':
            return $base . "You are in DRUG DATABASE mode. "
                . "The user will give you a drug name — it can be INN/generic or brand. "
                . "FIRST identify the active ingredient, then provide a structured fact sheet. "
                . "Never recommend dosing for patients directly — this is clinician-facing info.";

        case 'quiz':
            $spec = $input['specialty'] ?? 'Internal Medicine';
            $diff = $input['difficulty'] ?? 'intermediate';
            $count = (int)($input['count'] ?? 5);
            $count = max(1, min(10, $count));
            return $base . "You are in QUIZ GENERATOR mode for Romanian medical residency exam (Rezidențiat). "
                . "Generate exactly $count multiple-choice clinical vignette questions for: **$spec**. "
                . "Difficulty: $diff. "
                . "Use citations when relevant. No preamble, no closing remarks.";

        case 'tutor':
            $subject = $input['subject'] ?? 'General Medicine';
            return $base . "You are in TUTOR mode — personal tutor. "
                . "Current subject: **$subject**. Teach Socratically + evidence-based.";

        case 'vision':
            return $base . "You are in RADIOLOGY SECOND-OPINION mode. "
                . "Provide a STRUCTURED read with Findings, Differential, Next steps, Red flags, Confidence, Disclaimer.";

        default:
            return $base;
    }
}

$systemPrompt = buildSystemPrompt($mode, $input, $langName);

// ============ BUILD MESSAGES ============
$messages = [];

if ($mode === 'vision' && !empty($input['image_base64'])) {
    $imgData = $input['image_base64'];
    if (preg_match('/^data:(image\/[\w+]+);base64,(.+)$/', $imgData, $m)) {
        $mediaType = $m[1];
        $imgData = $m[2];
    } else {
        $mediaType = $input['image_mime'] ?? 'image/jpeg';
    }
    $userText = $input['prompt'] ?? 'Please analyze this medical image and provide a structured second-opinion read.';
    $messages[] = [
        'role' => 'user',
        'content' => [
            ['type' => 'image', 'source' => [
                'type' => 'base64',
                'media_type' => $mediaType,
                'data' => $imgData
            ]],
            ['type' => 'text', 'text' => $userText]
        ]
    ];
} elseif ($mode === 'quiz') {
    $spec = $input['specialty'] ?? 'Internal Medicine';
    $messages[] = ['role' => 'user', 'content' => "Generate the quiz now for: $spec."];
} elseif ($mode === 'drug') {
    $drugName = trim($input['drug'] ?? '');
    if (empty($drugName)) {
        header('Content-Type: application/json; charset=utf-8');
        http_response_code(400);
        echo json_encode(['error' => 'Missing drug name']);
        exit;
    }
    $messages[] = ['role' => 'user', 'content' => "Drug: $drugName"];
} elseif (!empty($input['messages']) && is_array($input['messages'])) {
    $messages = $input['messages'];
} elseif (!empty($input['prompt'])) {
    $messages[] = ['role' => 'user', 'content' => $input['prompt']];
} else {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code(400);
    echo json_encode(['error' => 'Missing input']);
    exit;
}

// ============ APPLY RAG TO ALL MODES ============
// Build a retrieval query from the latest user content + optional patient context.
$ragEnabled = true;
if (array_key_exists('rag', $input)) {
    $ragEnabled = (bool)$input['rag'];
}

if ($ragEnabled) {
    $qText = '';
    // Prefer explicit prompt
    if (!empty($input['prompt'])) $qText .= $input['prompt'] . "\n";
    // Or last message content
    if (!empty($messages) && is_array($messages)) {
        $last = end($messages);
        if (is_array($last)) {
            $c = $last['content'] ?? '';
            if (is_string($c)) $qText .= $c . "\n";
            // vision content includes a text block inside array
            if (is_array($c)) {
                foreach ($c as $blk) {
                    if (is_array($blk) && ($blk['type'] ?? '') === 'text') $qText .= ($blk['text'] ?? '') . "\n";
                }
            }
        }
    }
    if (!empty($input['patient_context'])) {
        $pc = $input['patient_context'];
        if (is_array($pc) && !empty($pc['raw'])) $qText .= "\nPatient context: " . $pc['raw'] . "\n";
    }

    $chunks = ragRetrieve($qText, 4);
    if (!empty($chunks)) {
        $ragBlock = "\n\nREFERENCE EXCERPTS (use as grounding; cite bracket tags when used):\n";
        foreach ($chunks as $idx => $ch) {
            $n = $idx + 1;
            $ragBlock .= "\n[Excerpt $n]\n" . $ch . "\n";
        }
        $systemPrompt .= $ragBlock;
    }
}

// ============ CALL CLAUDE API ============
$maxTokens = ($mode === 'quiz') ? 10000 : (($mode === 'vision') ? 1500 : 1400);
$payload = [
    'model' => $MODEL,
    'max_tokens' => $maxTokens,
    'system' => $systemPrompt,
    'messages' => $messages,
    'stream' => (bool)$stream
];

$apiUrl = 'https://api.anthropic.com/v1/messages';
$headers = [
    'Content-Type: application/json',
    'x-api-key: ' . $API_KEY,
    'anthropic-version: 2023-06-01'
];

if ($stream) {
    header('Content-Type: text/event-stream; charset=utf-8');
    header('Cache-Control: no-cache, no-transform');
    header('X-Accel-Buffering: no');
    @ini_set('zlib.output_compression', 0);
    @ini_set('output_buffering', 0);
    @ini_set('implicit_flush', 1);
    while (ob_get_level() > 0) ob_end_flush();
    ob_implicit_flush(true);

    $ch = curl_init($apiUrl);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode($payload),
        CURLOPT_HTTPHEADER     => $headers,
        CURLOPT_RETURNTRANSFER => false,
        CURLOPT_TIMEOUT        => 180,
        CURLOPT_WRITEFUNCTION  => function($ch, $data) {
            echo $data;
            @flush();
            return strlen($data);
        }
    ]);
    curl_exec($ch);
    $err = curl_error($ch);
    curl_close($ch);
    if ($err) {
        echo "event: error\ndata: " . json_encode(['error' => $err]) . "\n\n";
        @flush();
    }
    exit;
} else {
    header('Content-Type: application/json; charset=utf-8');
    $ch = curl_init($apiUrl);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode($payload),
        CURLOPT_HTTPHEADER     => $headers,
        CURLOPT_TIMEOUT        => 120
    ]);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlErr = curl_error($ch);
    curl_close($ch);

    if ($curlErr) {
        http_response_code(500);
        echo json_encode(['error' => 'Connection error', 'detail' => $curlErr]);
        exit;
    }
    if ($httpCode !== 200) {
        http_response_code($httpCode);
        echo $response;
        exit;
    }
    $data = json_decode($response, true);
    $text = '';
    if (!empty($data['content']) && is_array($data['content'])) {
        foreach ($data['content'] as $block) {
            if (($block['type'] ?? '') === 'text') $text .= $block['text'];
        }
    }
    echo json_encode([
        'ok' => true,
        'text' => $text,
        'model' => $data['model'] ?? $MODEL,
        'usage' => $data['usage'] ?? null
    ]);
}

