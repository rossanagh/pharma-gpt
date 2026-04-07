package com.example.pharma_gpt.dto;

public record LikeToggleResponse(
    boolean liked,
    long likeCount
) {}

