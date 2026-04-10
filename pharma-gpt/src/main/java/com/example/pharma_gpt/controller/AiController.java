package com.example.pharma_gpt.controller;

import com.example.pharma_gpt.dto.AskRequest;
import com.example.pharma_gpt.dto.AskResponse;
import com.example.pharma_gpt.service.OpenAiService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4200/"})
public class AiController {

    private final OpenAiService openAiService;
    private final ObjectMapper objectMapper;

    public AiController(OpenAiService openAiService, ObjectMapper objectMapper) {
        this.openAiService = openAiService;
        this.objectMapper = objectMapper;
    }

    @PostMapping("/ask")
    public ResponseEntity<AskResponse> ask(@Valid @RequestBody AskRequest request) {
        String response = openAiService.ask(request.question(), request.history());
        return ResponseEntity.ok(new AskResponse(response));
    }

    /**
     * Progressive answer: Server-Sent Events with JSON payloads {@code {"delta":"..."}} or {@code {"error":"..."}}.
     */
    @PostMapping(value = "/ask/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter askStream(@Valid @RequestBody AskRequest request) {
        SseEmitter emitter = new SseEmitter(600_000L);
        CompletableFuture.runAsync(() -> {
            try {
                openAiService.streamAsk(request.question(), request.history(), chunk -> {
                    try {
                        String json = objectMapper.writeValueAsString(Map.of("delta", chunk));
                        emitter.send(SseEmitter.event().data(json, MediaType.APPLICATION_JSON));
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                });
                emitter.complete();
            } catch (Exception e) {
                try {
                    String msg = e.getMessage() != null ? e.getMessage() : "stream failed";
                    String json = objectMapper.writeValueAsString(Map.of("error", msg));
                    emitter.send(SseEmitter.event().data(json, MediaType.APPLICATION_JSON));
                    emitter.complete();
                } catch (IOException ex) {
                    emitter.completeWithError(e);
                }
            }
        });
        return emitter;
    }
}
