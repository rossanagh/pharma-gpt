package com.example.pharma_gpt.controller;

import com.example.pharma_gpt.service.DmEventService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequestMapping("/api/dm")
public class DmSseController {

    private final DmEventService dmEventService;

    public DmSseController(DmEventService dmEventService) {
        this.dmEventService = dmEventService;
    }

    @GetMapping("/stream")
    public SseEmitter stream(Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        return dmEventService.register(email);
    }
}

