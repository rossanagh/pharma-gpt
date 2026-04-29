package com.example.pharma_gpt.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record PasswordResetConfirmRequest(
    @NotBlank @Size(max = 190) String target,
    @NotBlank @Size(min = 4, max = 12) String code,
    @NotBlank @Size(min = 8, max = 200) String newPassword
) {}

