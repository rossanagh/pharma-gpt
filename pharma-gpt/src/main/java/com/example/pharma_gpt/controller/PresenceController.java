package com.example.pharma_gpt.controller;

import com.example.pharma_gpt.service.PresenceService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/presence")
public class PresenceController {

    private final PresenceService presenceService;

    public PresenceController(PresenceService presenceService) {
        this.presenceService = presenceService;
    }

    @PostMapping("/ping")
    public ResponseEntity<Map<String, Boolean>> ping(Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        presenceService.ping(email);
        return ResponseEntity.ok(Map.of("ok", true));
    }
}
