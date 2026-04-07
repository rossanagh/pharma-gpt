package com.example.pharma_gpt.dto;

public record LoginResponse(
    String token,
    String fullName,
    String email,
    String firstName,
    String lastName,
    String providerType,
    String medicGrade,
    String specialty,
    String academicTitles,
    String parafa
) {}
