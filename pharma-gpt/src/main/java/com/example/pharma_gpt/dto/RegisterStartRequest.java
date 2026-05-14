package com.example.pharma_gpt.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterStartRequest(
    @NotBlank @Email String email,
    @NotBlank @Size(min = 2, max = 100) String firstName,
    @NotBlank @Size(min = 2, max = 100) String lastName,
    @NotBlank @Size(max = 80) String county,
    @Size(max = 30) String phoneNumber,
    @NotBlank @Size(max = 255) String parafa,
    @NotBlank @Size(max = 50) String providerType,
    @Size(max = 50) String medicGrade,
    @Size(max = 120) String specialty,
    @Size(max = 500) String academicTitles,
    @NotBlank @Size(min = 8, max = 128) String password
) {}
