package com.example.pharma_gpt.controller;

import com.example.pharma_gpt.dto.AskRequest;
import com.example.pharma_gpt.dto.AskResponse;
import com.example.pharma_gpt.service.OpenAiService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4200/"})
public class AiController {

    private final OpenAiService openAiService;

    public AiController(OpenAiService openAiService) {
        this.openAiService = openAiService;
    }

    @PostMapping("/ask")
    public ResponseEntity<AskResponse> ask(@Valid @RequestBody AskRequest request) {
        String response = openAiService.ask(request.question(), request.history());
        return ResponseEntity.ok(new AskResponse(response));
    }
}
