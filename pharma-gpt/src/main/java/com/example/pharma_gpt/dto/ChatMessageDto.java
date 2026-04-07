package com.example.pharma_gpt.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ChatMessageDto(
    @NotBlank
    String role,

    @NotBlank
    @Size(max = 12000)
    String content
) {}
