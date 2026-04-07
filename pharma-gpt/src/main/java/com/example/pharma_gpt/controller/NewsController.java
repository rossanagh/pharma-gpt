package com.example.pharma_gpt.controller;

import com.example.pharma_gpt.dto.NewsItemDto;
import com.example.pharma_gpt.service.NewsAggregationService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    private final NewsAggregationService news;

    public NewsController(NewsAggregationService news) {
        this.news = news;
    }

    /**
     * Ultimele 5 știri din DB, ordine invers cronologică. Actualizarea surselor: startup, cron, POST /refresh.
     */
    @GetMapping
    public List<NewsItemDto> latest() {
        return news.latestNews();
    }

    /**
     * Răspunde imediat; scanarea surselor rulează în fundal (poate dura minute — nu mai blochează UI-ul).
     */
    @PostMapping("/refresh")
    public Map<String, Object> refresh() {
        CompletableFuture.runAsync(() -> {
            try {
                news.scanNow();
            } catch (Exception ignored) {
            }
        });
        return Map.of("ok", true, "queued", true);
    }
}

