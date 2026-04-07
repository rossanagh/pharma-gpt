package com.example.pharma_gpt.config;

import com.example.pharma_gpt.service.NewsAggregationService;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

/**
 * Nu blochează HTTP: dacă nu există încă știri în DB, pornește o actualizare în fundal.
 */
@Component
public class NewsWarmupListener {

    private final NewsAggregationService newsAggregationService;

    public NewsWarmupListener(NewsAggregationService newsAggregationService) {
        this.newsAggregationService = newsAggregationService;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void warmupNewsInBackground() {
        CompletableFuture.runAsync(() -> {
            try {
                if (newsAggregationService.latestNews().isEmpty()) {
                    newsAggregationService.scanNow();
                }
            } catch (Exception ignored) {
                // surse externe indisponibile — ignorăm; cron-ul / refresh manual pot reîncerca
            }
        });
    }
}
