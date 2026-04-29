package com.example.pharma_gpt.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;
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

    public boolean isConfigured() {
        return apiKey != null && !apiKey.isBlank();
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

    /**
     * Radiology second-opinion (vision) using Anthropic Messages API with base64 image blocks.
     */
    public String analyzeRadiologyImage(byte[] imageBytes, String contentType) {
        if (!isConfigured()) {
            return "Serviciul Claude nu este configurat (ANTHROPIC_API_KEY).";
        }
        // Anthropic image payload has smaller size limits; keep a conservative cap here.
        if (imageBytes != null && imageBytes.length > (3_500_000)) {
            return "Imagine prea mare pentru analiza Radiology (Claude). Te rog încarcă un JPG/PNG mai mic (sub ~3.5MB).";
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-api-key", apiKey.trim());
        headers.set("anthropic-version", "2023-06-01");

        String systemPrompt = """
            You are MedicinEvidence Radiology AI. Provide an evidence-based radiology second-opinion for clinicians in Europe.

            Output requirements:
            - Use a clear clinical structure:
              1) Study type & image quality (if determinable)
              2) Key findings (bullets)
              3) Differential diagnosis (ranked; include red flags)
              4) Confidence level (low/medium/high) + why
              5) Recommended next steps (imaging/labs/urgent escalation when needed)
              6) Limitations (single image, missing views, clinical context)
              7) Sources (links)

            Safety constraints:
            - Do not claim to replace a radiologist. Encourage formal read.
            - If you cannot reliably interpret the image, say so and give safe next steps.

            Sources: include these links (and optionally others you are confident about):
            - ESR iGuide imaging referral guidelines: https://esriguide.org/
            - European Commission clinical audit & radiation protection guidance: https://op.europa.eu/en/publication-detail/-/publication/75688cc6-c9d3-4c43-9bfd-ce5cea0d8bcb
            - WHO: Radiation Protection and Safety in Medical Uses of Ionizing Radiation: https://www.who.int/publications/m/item/radiation-protection-and-safety-in-medical-uses-ionizing-radiation
            """;

        String b64 = imageBytes != null ? Base64.getEncoder().encodeToString(imageBytes) : "";

        Map<String, Object> imgBlock = Map.of(
            "type", "image",
            "source", Map.of(
                "type", "base64",
                "media_type", contentType,
                "data", b64
            )
        );
        Map<String, Object> textBlock = Map.of(
            "type", "text",
            "text", "Analyze the uploaded medical image and provide a structured second-opinion."
        );

        Map<String, Object> requestBody = Map.of(
            "model", MODEL,
            "max_tokens", MAX_TOKENS,
            "system", systemPrompt,
            "messages", List.of(
                Map.of(
                    "role", "user",
                    "content", List.of(imgBlock, textBlock)
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
            return "A apărut o eroare la comunicarea cu serviciul Radiology AI: " + e.getMessage();
        }

        return "Nu s-a putut obține un răspuns de la serviciul Radiology AI.";
    }
}
