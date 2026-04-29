package com.example.pharma_gpt.entity;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(
    name = "password_reset_codes",
    indexes = {
        @Index(name = "idx_prc_target", columnList = "target_normalized"),
        @Index(name = "idx_prc_expires", columnList = "expires_at")
    }
)
public class PasswordResetCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** email lowercased, or phone normalized. */
    @Column(name = "target_normalized", nullable = false, length = 190)
    private String targetNormalized;

    @Column(name = "code_hash", nullable = false, length = 100)
    private String codeHash;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt = Instant.now();

    @Column(name = "expires_at", nullable = false)
    private Instant expiresAt;

    @Column(name = "attempts", nullable = false)
    private int attempts = 0;

    @Column(name = "used", nullable = false)
    private boolean used = false;

    public PasswordResetCode() {}

    public Long getId() {
        return id;
    }

    public String getTargetNormalized() {
        return targetNormalized;
    }

    public void setTargetNormalized(String targetNormalized) {
        this.targetNormalized = targetNormalized;
    }

    public String getCodeHash() {
        return codeHash;
    }

    public void setCodeHash(String codeHash) {
        this.codeHash = codeHash;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(Instant expiresAt) {
        this.expiresAt = expiresAt;
    }

    public int getAttempts() {
        return attempts;
    }

    public void incrementAttempts() {
        this.attempts++;
    }

    public boolean isUsed() {
        return used;
    }

    public void setUsed(boolean used) {
        this.used = used;
    }
}

