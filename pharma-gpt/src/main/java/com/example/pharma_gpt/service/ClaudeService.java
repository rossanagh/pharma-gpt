package com.example.pharma_gpt.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class ClaudeService {

    private static final String CLAUDE_API_URL = "https://api.anthropic.com/v1/messages";
    private static final String MODEL = "claude-sonnet-4-20250514";
    private static final int MAX_TOKENS = 1024;

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    @Value("${anthropic.api-key:}")
    private String apiKey;

    public ClaudeService(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    public String ask(String question) {
        if (apiKey == null || apiKey.isBlank()) {
            return "Serviciul Claude nu este configurat (ANTHROPIC_API_KEY). Chat-ul folosește OpenAI — vezi OPENAI_API_KEY sau application-local.properties.";
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-api-key", apiKey);
        headers.set("anthropic-version", "2023-06-01");

        String systemPrompt = """
            Ești un asistent medical specializat pentru profesioniștii din domeniul farmaceutic și medical.
            Răspunde în română, cu informații precise și utile. Menționează întotdeauna că recomandările tale
            nu înlocuiesc consilierea medicală profesională și că utilizatorul trebuie să consulte un medic.
            """;

        Map<String, Object> requestBody = Map.of(
            "model", MODEL,
            "max_tokens", MAX_TOKENS,
            "system", systemPrompt,
            "messages", List.of(
                Map.of(
                    "role", "user",
                    "content", question
                )
            )
        );

        try {
            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);
            ResponseEntity<String> response = restTemplate.exchange(
                CLAUDE_API_URL,
                HttpMethod.POST,
                entity,
                String.class
            );

            if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                JsonNode root = objectMapper.readTree(response.getBody());
                JsonNode content = root.path("content");
                if (content.isArray() && content.size() > 0) {
                    return content.get(0).path("text").asText();
                }
            }
        } catch (Exception e) {
            return "A apărut o eroare la comunicarea cu serviciul AI: " + e.getMessage();
        }

        return "Nu s-a putut obține un răspuns de la serviciul AI.";
    }
}
