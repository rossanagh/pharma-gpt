package com.example.pharma_gpt.dto;

import java.time.Instant;

public record ForumPostResponse(
    Long id,
    Instant createdAt,
    UserSummaryResponse author,
    String title,
    String content,
    long likeCount,
    boolean likedByMe,
    long commentCount
) {}

