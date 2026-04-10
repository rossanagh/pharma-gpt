package com.example.pharma_gpt.service;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.regex.Pattern;

/**
 * Lightweight RAG: retrieve knowledge-base snippets by token overlap with the user question.
 * Embeddings/pgvector can replace this without changing the public API.
 */
@Service
public class RagKnowledgeService {

    private static final Pattern TOKEN_SPLIT = Pattern.compile("[^a-zA-Z0-9]+");
    private static final int MIN_TOKEN_LEN = 2;

    private final List<String> chunks = new ArrayList<>();

    @PostConstruct
    public void loadKnowledge() {
        try {
            var res = new ClassPathResource("rag/knowledge.txt");
            if (!res.exists()) {
                return;
            }
            try (var in = new BufferedReader(new InputStreamReader(res.getInputStream(), StandardCharsets.UTF_8))) {
                StringBuilder sb = new StringBuilder();
                String line;
                while ((line = in.readLine()) != null) {
                    if ("---".equals(line.trim())) {
                        flushChunk(sb);
                    } else {
                        if (!sb.isEmpty()) {
                            sb.append('\n');
                        }
                        sb.append(line);
                    }
                }
                flushChunk(sb); // last segment after final ---
            }
        } catch (Exception ignored) {
            /* empty KB — model still runs without RAG */
        }
    }

    private void flushChunk(StringBuilder sb) {
        String s = sb.toString().trim();
        sb.setLength(0);
        if (!s.isEmpty()) {
            chunks.add(s);
        }
    }

    /**
     * Returns concatenated top snippets for system prompt grounding, or empty string if none.
     */
    public String retrieveContext(String question, int maxChunks) {
        if (chunks.isEmpty() || question == null || question.isBlank()) {
            return "";
        }
        Set<String> qTokens = tokenize(question);
        if (qTokens.isEmpty()) {
            return "";
        }
        record Scored(String text, int score) {}
        List<Scored> scored = new ArrayList<>();
        for (String c : chunks) {
            String lc = c.toLowerCase(Locale.ROOT);
            int score = 0;
            for (String t : qTokens) {
                if (lc.contains(t)) {
                    score++;
                }
            }
            if (score > 0) {
                scored.add(new Scored(c, score));
            }
        }
        if (scored.isEmpty()) {
            return "";
        }
        scored.sort(Comparator.comparingInt(Scored::score).reversed());
        StringBuilder out = new StringBuilder();
        int n = Math.min(maxChunks, scored.size());
        for (int i = 0; i < n; i++) {
            if (i > 0) {
                out.append("\n\n");
            }
            out.append("- ").append(scored.get(i).text);
        }
        return out.toString();
    }

    private static Set<String> tokenize(String text) {
        Set<String> set = new HashSet<>();
        for (String raw : TOKEN_SPLIT.split(text.toLowerCase(Locale.ROOT))) {
            if (raw.length() >= MIN_TOKEN_LEN) {
                set.add(raw);
            }
        }
        return set;
    }
}
