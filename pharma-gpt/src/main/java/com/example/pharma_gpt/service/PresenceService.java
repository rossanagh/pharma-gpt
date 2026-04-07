package com.example.pharma_gpt.service;

import org.springframework.stereotype.Service;

import java.util.concurrent.ConcurrentHashMap;

@Service
public class PresenceService {

    /** Consider user online if last ping within this window (ms). */
    private static final long ONLINE_WINDOW_MS = 90_000L;

    private final ConcurrentHashMap<String, Long> lastSeenByEmail = new ConcurrentHashMap<>();

    public void ping(String email) {
        if (email == null || email.isBlank()) return;
        lastSeenByEmail.put(email.trim().toLowerCase(), System.currentTimeMillis());
    }

    public boolean isOnline(String email) {
        if (email == null || email.isBlank()) return false;
        Long t = lastSeenByEmail.get(email.trim().toLowerCase());
        if (t == null) return false;
        return System.currentTimeMillis() - t <= ONLINE_WINDOW_MS;
    }
}
