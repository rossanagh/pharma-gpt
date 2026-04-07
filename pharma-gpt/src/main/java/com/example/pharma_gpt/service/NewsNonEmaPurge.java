package com.example.pharma_gpt.service;

import com.example.pharma_gpt.repository.NewsItemRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Șterge din DB orice știre care nu e din sursa EMA. Tranzacție separată (REQUIRES_NEW)
 * ca să nu fie anulată dacă scanul RSS eșuează după delete (rollback pe scanNow).
 */
@Component
public class NewsNonEmaPurge {

    private static final String SOURCE_EMA = "EMA";

    private final NewsItemRepository repo;

    public NewsNonEmaPurge(NewsItemRepository repo) {
        this.repo = repo;
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void purgeNonEmaSources() {
        repo.deleteBySourceNot(SOURCE_EMA);
    }
}
