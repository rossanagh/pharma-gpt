package com.example.pharma_gpt.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.pharma_gpt.dto.ChatMessageDto;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OpenAiService {

    private static final String OPENAI_CHAT_URL = "https://api.openai.com/v1/chat/completions";

    private static final String SYSTEM_PROMPT = """
        You are Pharma-GPT, an AI assistant for pharmacists and healthcare professionals.
        Answer only questions related to medicines, interactions, clinical guidelines, pharmacy workflows,
        side effects, pharmaceutical law, and education.
        Respond in Romanian unless the user clearly writes in another language.
        Always remind users that this does not replace professional medical or pharmaceutical advice
        and that they must verify critical decisions with a licensed pharmacist or physician.""";

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    @Value("${openai.api-key:}")
    private String apiKey;

    @Value("${openai.model:gpt-4o-mini}")
    private String model;

    public OpenAiService(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    private static final int MAX_HISTORY_MESSAGES = 40;

    public String ask(String question, List<ChatMessageDto> history) {
        if (apiKey == null || apiKey.isBlank()) {
            return """
                Serviciul AI nu este configurat. Alege una din variante:
                1) Variabila de mediu OPENAI_API_KEY (recomandat), sau
                2) Fișier application-local.properties cu openai.api-key=... (vezi application-local.properties.example).
                Repornește backend-ul după ce setezi cheia.
                """.stripIndent();
        }

        List<Map<String, String>> messages = new ArrayList<>();
        messages.add(Map.of("role", "system", "content", SYSTEM_PROMPT));
        if (history != null && !history.isEmpty()) {
            int start = Math.max(0, history.size() - MAX_HISTORY_MESSAGES);
            for (int i = start; i < history.size(); i++) {
                ChatMessageDto m = history.get(i);
                String r = m.role().toLowerCase();
                if (!"user".equals(r) && !"assistant".equals(r)) {
                    continue;
                }
                messages.add(Map.of("role", r, "content", m.content()));
            }
        }
        messages.add(Map.of("role", "user", "content", question));

        Map<String, Object> body = new HashMap<>();
        body.put("model", model);
        body.put("temperature", 0.4);
        body.put("messages", messages);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey.trim());

        try {
            String jsonBody = objectMapper.writeValueAsString(body);
            HttpEntity<String> entity = new HttpEntity<>(jsonBody, headers);
            ResponseEntity<String> response = restTemplate.exchange(
                OPENAI_CHAT_URL,
                HttpMethod.POST,
                entity,
                String.class
            );

            if (!response.getStatusCode().is2xxSuccessful() || response.getBody() == null) {
                return "Nu s-a putut obține un răspuns de la OpenAI.";
            }

            JsonNode root = objectMapper.readTree(response.getBody());
            JsonNode err = root.path("error");
            if (!err.isMissingNode() && err.path("message").isTextual()) {
                return "Eroare OpenAI: " + err.path("message").asText();
            }

            JsonNode choices = root.path("choices");
            if (choices.isArray() && choices.size() > 0) {
                String text = choices.get(0).path("message").path("content").asText("");
                if (!text.isBlank()) {
                    return text;
                }
            }
        } catch (Exception e) {
            return "A apărut o eroare la comunicarea cu OpenAI: " + e.getMessage();
        }

        return "Nu s-a putut obține un răspuns de la serviciul AI.";
    }
}
