package com.example.pharma_gpt.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class RadiologyService {

    private final OpenAiService openAiService;
    private final ClaudeService claudeService;

    public RadiologyService(OpenAiService openAiService, ClaudeService claudeService) {
        this.openAiService = openAiService;
        this.claudeService = claudeService;
    }

    public String analyze(MultipartFile image) throws Exception {
        if (image == null || image.isEmpty()) {
            throw new IllegalArgumentException("Missing image");
        }
        String ct = image.getContentType() != null ? image.getContentType() : "";
        if (!"image/jpeg".equalsIgnoreCase(ct) && !"image/png".equalsIgnoreCase(ct)) {
            throw new IllegalArgumentException("Unsupported content type: " + ct);
        }
        if (image.getSize() > 5L * 1024L * 1024L) {
            throw new IllegalArgumentException("File too large (max 5MB)");
        }
        byte[] bytes = image.getBytes();
        if (openAiService.isConfigured()) {
            return openAiService.analyzeRadiologyImage(bytes, ct);
        }
        if (claudeService.isConfigured()) {
            return claudeService.analyzeRadiologyImage(bytes, ct);
        }
        return "Radiology AI nu este configurat. Setează OPENAI_API_KEY sau ANTHROPIC_API_KEY și repornește backend-ul.";
    }
}

