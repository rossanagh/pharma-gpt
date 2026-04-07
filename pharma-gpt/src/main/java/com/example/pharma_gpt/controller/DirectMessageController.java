package com.example.pharma_gpt.controller;

import com.example.pharma_gpt.dto.DirectConversationResponse;
import com.example.pharma_gpt.dto.DirectMessageResponse;
import com.example.pharma_gpt.dto.SendMessageRequest;
import com.example.pharma_gpt.service.DirectMessageService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dm")
public class DirectMessageController {

    private final DirectMessageService dm;

    public DirectMessageController(DirectMessageService dm) {
        this.dm = dm;
    }

    @GetMapping("/conversations")
    public ResponseEntity<List<DirectConversationResponse>> conversations(Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        return ResponseEntity.ok(dm.listConversations(email));
    }

    @GetMapping("/conversations/{id}/messages")
    public ResponseEntity<?> messages(Authentication authentication,
                                     @PathVariable("id") Long conversationId,
                                     @RequestParam(value = "before", required = false) String beforeIso,
                                     @RequestParam(value = "limit", required = false, defaultValue = "30") int limit) {
        try {
            String email = (String) authentication.getPrincipal();
            Instant before = beforeIso == null || beforeIso.isBlank() ? null : Instant.parse(beforeIso);
            List<DirectMessageResponse> result = dm.listMessages(email, conversationId, before, limit);
            return ResponseEntity.ok(result);
        } catch (IllegalArgumentException e) {
            String msg = e.getMessage() == null ? "Invalid request" : e.getMessage();
            int status = "Forbidden".equalsIgnoreCase(msg) ? 403 : 400;
            return ResponseEntity.status(status).body(Map.of("error", msg));
        }
    }

    @PostMapping("/peers/{peerUserId}/messages")
    public ResponseEntity<?> send(Authentication authentication,
                                 @PathVariable("peerUserId") Long peerUserId,
                                 @Valid @RequestBody SendMessageRequest request) {
        try {
            String email = (String) authentication.getPrincipal();
            DirectMessageResponse saved = dm.sendMessage(email, peerUserId, request.content());
            return ResponseEntity.ok(saved);
        } catch (IllegalArgumentException e) {
            String msg = e.getMessage() == null ? "Invalid request" : e.getMessage();
            int status = "Forbidden".equalsIgnoreCase(msg) ? 403 : 400;
            return ResponseEntity.status(status).body(Map.of("error", msg));
        }
    }
}

