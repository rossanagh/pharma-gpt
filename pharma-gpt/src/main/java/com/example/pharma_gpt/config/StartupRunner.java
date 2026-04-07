package com.example.pharma_gpt.config;

import com.example.pharma_gpt.service.NewsAggregationService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StartupRunner {

    @Bean
    CommandLineRunner scanNewsOnStartup(NewsAggregationService news) {
        return args -> {
            try {
                news.scanNow();
            } catch (Exception ignored) {
            }
        };
    }
}

