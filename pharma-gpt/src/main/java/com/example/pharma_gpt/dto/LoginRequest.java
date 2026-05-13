package com.example.pharma_gpt.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Either {@code loginCode} (6 digits) for passwordless sign-in, or {@code email} + {@code password} for legacy accounts.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record LoginRequest(
    String email,
    String password,
    /** 6-digit access code — unique per account after registration */
    String loginCode
) {}
