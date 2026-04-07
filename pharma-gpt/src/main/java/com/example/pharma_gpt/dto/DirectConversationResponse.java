package com.example.pharma_gpt.dto;

import java.time.Instant;

public record DirectConversationResponse(
    Long id,
    Instant lastMessageAt,
    UserSummaryResponse peer,
    DirectMessageResponse lastMessage
) {}

