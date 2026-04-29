package com.example.pharma_gpt.service;

import org.springframework.stereotype.Service;

import java.security.SecureRandom;

@Service
public class OtpService {
    private final SecureRandom rng = new SecureRandom();

    /** 6 digits, zero-padded. */
    public String generate6Digits() {
        int v = rng.nextInt(1_000_000);
        return String.format("%06d", v);
    }
}

