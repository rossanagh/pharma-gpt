package com.example.pharma_gpt.dto;

import java.time.Instant;

public record ForumCommentResponse(
    Long id,
    Long postId,
    Instant createdAt,
    UserSummaryResponse author,
    String content
) {}

