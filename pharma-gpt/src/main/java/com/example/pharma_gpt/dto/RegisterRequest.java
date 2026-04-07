package com.example.pharma_gpt.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
    @NotBlank @Email String email,
    @NotBlank @Size(min = 6) String password,
    @NotBlank @Size(min = 2, max = 100) String firstName,
    @NotBlank @Size(min = 2, max = 100) String lastName,
    @Size(max = 30) String phoneNumber,
    @NotBlank @Size(max = 255) String parafa,
    /** medic, farmacist, asistent_medical, asistent_farmacist */
    @NotBlank @Size(max = 50) String providerType,
    /** rezident, specialist, primar — obligatoriu dacă providerType = medic */
    @Size(max = 50) String medicGrade,
    @Size(max = 120) String specialty,
    @Size(max = 500) String academicTitles
) {}
