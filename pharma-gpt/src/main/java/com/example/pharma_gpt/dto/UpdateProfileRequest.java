package com.example.pharma_gpt.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UpdateProfileRequest(
    @NotBlank @Size(min = 2, max = 100) String firstName,
    @NotBlank @Size(min = 2, max = 100) String lastName,
    @Size(max = 30) String phoneNumber,
    @Size(max = 255) String parafa,
    @NotBlank @Size(max = 50) String providerType,
    @Size(max = 50) String medicGrade,
    @Size(max = 120) String specialty,
    @Size(max = 500) String academicTitles
) {}
