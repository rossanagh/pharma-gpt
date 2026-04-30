<?php
// MedicinEvidence - Password reset mail proxy (cPanel)
// Upload this file to public_html as: send-reset.php
// Configure the secret below (must match PHARMA_MAIL_PROXY_SECRET in Render).

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$SECRET = 'CHANGE_ME_LONG_RANDOM_SECRET';

function respond(int $code, array $payload): void {
  http_response_code($code);
  echo json_encode($payload);
  exit;
}

// Only allow POST
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  respond(405, ['error' => 'Method not allowed']);
}

// Verify secret header
$hdr = $_SERVER['HTTP_X_PROXY_SECRET'] ?? '';
if (!$SECRET || $SECRET === 'CHANGE_ME_LONG_RANDOM_SECRET') {
  respond(500, ['error' => 'Proxy secret not configured']);
}
if (!hash_equals($SECRET, $hdr)) {
  respond(403, ['error' => 'Forbidden']);
}

$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
  respond(400, ['error' => 'Invalid JSON']);
}

$to = trim((string)($data['to'] ?? ''));
$code = trim((string)($data['code'] ?? ''));
if ($to === '' || $code === '') {
  respond(400, ['error' => 'Missing to/code']);
}
if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
  respond(400, ['error' => 'Invalid email']);
}
if (!preg_match('/^\d{6}$/', $code)) {
  respond(400, ['error' => 'Invalid code']);
}

$subject = 'MedicinEvidence — password reset code';
$message = "Your MedicinEvidence password reset code is:\n\n{$code}\n\nThis code expires in 10 minutes. If you did not request a reset, ignore this email.\n";

// From: prefer your domain mailbox
$from = 'contact@medicinevidence.com';
$headers = "From: {$from}\r\n" .
           "Reply-To: {$from}\r\n" .
           "MIME-Version: 1.0\r\n" .
           "Content-Type: text/plain; charset=UTF-8\r\n";

$ok = @mail($to, $subject, $message, $headers);
if (!$ok) {
  respond(500, ['error' => 'mail() failed']);
}

respond(200, ['ok' => true]);
