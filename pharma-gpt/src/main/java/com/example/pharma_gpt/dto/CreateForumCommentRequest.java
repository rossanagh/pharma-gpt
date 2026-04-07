package com.example.pharma_gpt.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateForumCommentRequest(
    @NotBlank
    @Size(max = 2000)
    String content
) {}

