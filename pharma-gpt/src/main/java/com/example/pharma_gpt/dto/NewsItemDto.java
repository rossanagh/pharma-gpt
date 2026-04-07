package com.example.pharma_gpt.dto;

import java.time.Instant;

public record NewsItemDto(
    String source,
    String title,
    String url,
    Instant publishedAt,
    /** Textul datei exact ca pe site (ex. ms.ro); dacă e null, clientul poate formata din publishedAt. */
    String dateDisplay
) {}

