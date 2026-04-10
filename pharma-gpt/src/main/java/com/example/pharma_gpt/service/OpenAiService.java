package com.example.pharma_gpt.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.pharma_gpt.dto.ChatMessageDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

@Service
public class OpenAiService {

    private static final String OPENAI_CHAT_URL = "https://api.openai.com/v1/chat/completions";

    private static final String ACADEMIC_STYLE = """
        You are Pharma-GPT, an assistant for pharmacists and healthcare professionals.
        Domain: medicines, interactions, clinical guidelines, pharmacy workflows, adverse effects,
        pharmaceutical law, and professional education.

        Writing style (academic, clinical):
        - Use clear structure with headings when helpful: e.g. Overview; Mechanisms / pharmacology (if relevant);
          Clinical considerations; Drug interactions & monitoring; Limitations of evidence; Practical takeaway.
        - Prefer precise terminology, cautious language, and proportional detail (avoid fluff).
        - When the knowledge base excerpts are provided below, ground your answer in them where applicable
          and treat them as supporting context (not as a substitute for local protocols or labeling).
        - If evidence is uncertain or patient-specific factors matter, state uncertainties explicitly.

        Language: respond in the same language as the user's latest message (match register and terminology).
        If the user mixes languages, follow the dominant language of the question.

        Safety: this does not replace independent professional judgment, product labeling, or direct patient care
        decisions; advise verification with a licensed pharmacist or physician for critical choices.""";

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;
    private final RagKnowledgeService ragKnowledgeService;
    private final HttpClient httpClient = HttpClient.newBuilder()
        .connectTimeout(Duration.ofSeconds(30))
        .build();

    @Value("${openai.api-key:}")
    private String apiKey;

    @Value("${openai.model:gpt-4o-mini}")
    private String model;

    @Value("${openai.rag.max-chunks:4}")
    private int ragMaxChunks;

    private static final int MAX_HISTORY_MESSAGES = 40;

    public OpenAiService(
        RestTemplate restTemplate,
        ObjectMapper objectMapper,
        RagKnowledgeService ragKnowledgeService
    ) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
        this.ragKnowledgeService = ragKnowledgeService;
    }

    public String ask(String question, List<ChatMessageDto> history) {
        if (apiKey == null || apiKey.isBlank()) {
            return """
                Serviciul AI nu este configurat. Alege una din variante:
                1) Variabila de mediu OPENAI_API_KEY (recomandat), sau
                2) Fișier application-local.properties cu openai.api-key=... (vezi application-local.properties.example).
                Repornește backend-ul după ce setezi cheia.
                """.stripIndent();
        }

        List<Map<String, String>> messages = buildChatMessages(question, history);

        Map<String, Object> body = new HashMap<>();
        body.put("model", model);
        body.put("temperature", 0.35);
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

    /**
     * Streams answer tokens from OpenAI; {@code onDelta} receives each content delta (may be empty lines skipped).
     */
    public void streamAsk(String question, List<ChatMessageDto> history, Consumer<String> onDelta) throws IOException {
        if (apiKey == null || apiKey.isBlank()) {
            onDelta.accept(
                "Serviciul AI nu este configurat (OPENAI / openai.api-key). Configurează cheia și repornește backend-ul."
            );
            return;
        }

        List<Map<String, String>> messages = buildChatMessages(question, history);

        Map<String, Object> body = new HashMap<>();
        body.put("model", model);
        body.put("temperature", 0.35);
        body.put("stream", true);
        body.put("messages", messages);

        String jsonBody = objectMapper.writeValueAsString(body);
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(OPENAI_CHAT_URL))
            .timeout(Duration.ofMinutes(10))
            .header(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey.trim())
            .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
            .build();

        HttpResponse<java.io.InputStream> response;
        try {
            response = httpClient.send(request, HttpResponse.BodyHandlers.ofInputStream());
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new IOException("OpenAI stream interrupted", e);
        }

        if (response.statusCode() < 200 || response.statusCode() >= 300) {
            String errBody = new String(response.body().readAllBytes(), java.nio.charset.StandardCharsets.UTF_8);
            throw new IOException("OpenAI HTTP " + response.statusCode() + ": " + errBody);
        }

        try (var in = new java.io.BufferedReader(new java.io.InputStreamReader(
            response.body(), java.nio.charset.StandardCharsets.UTF_8))) {
            String line;
            while ((line = in.readLine()) != null) {
                if (line.isBlank()) {
                    continue;
                }
                if (!line.startsWith("data:")) {
                    continue;
                }
                String data = line.substring(5).trim();
                if ("[DONE]".equals(data)) {
                    break;
                }
                JsonNode root = objectMapper.readTree(data);
                JsonNode err = root.path("error");
                if (!err.isMissingNode() && err.path("message").isTextual()) {
                    onDelta.accept("Eroare OpenAI: " + err.path("message").asText());
                    return;
                }
                JsonNode choices = root.path("choices");
                if (!choices.isArray() || choices.isEmpty()) {
                    continue;
                }
                String delta = choices.get(0).path("delta").path("content").asText("");
                if (!delta.isEmpty()) {
                    onDelta.accept(delta);
                }
            }
        }
    }

    private List<Map<String, String>> buildChatMessages(String question, List<ChatMessageDto> history) {
        String rag = ragKnowledgeService.retrieveContext(question, ragMaxChunks);
        String system = ACADEMIC_STYLE;
        if (rag != null && !rag.isBlank()) {
            system = system + "\n\nKnowledge base excerpts (RAG — use for grounding when relevant):\n" + rag;
        }

        List<Map<String, String>> messages = new ArrayList<>();
        messages.add(Map.of("role", "system", "content", system));
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
        return messages;
    }
}
