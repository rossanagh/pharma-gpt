package com.example.pharma_gpt.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;

public record AskRequest(
    @NotBlank(message = "Question is required")
    @Size(max = 4000)
    String question,

    /** Mesaje anterioare (user/assistant alternând); poate fi null sau gol. */
    @Valid
    List<ChatMessageDto> history
) {}
