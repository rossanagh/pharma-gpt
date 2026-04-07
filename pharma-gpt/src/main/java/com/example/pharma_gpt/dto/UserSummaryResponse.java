package com.example.pharma_gpt.dto;

public record UserSummaryResponse(
    Long id,
    String email,
    String firstName,
    String lastName,
    String parafa,
    String providerType,
    String specialty,
    boolean hasAvatar,
    boolean online
) {}

