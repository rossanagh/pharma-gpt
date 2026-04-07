package com.example.pharma_gpt.dto;

import java.time.Instant;

public record DirectMessageResponse(
    Long id,
    Long conversationId,
    Long senderUserId,
    Long recipientUserId,
    String content,
    Instant createdAt
) {}

