package com.example.pharma_gpt.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(
    name = "direct_conversations",
    uniqueConstraints = {
        @UniqueConstraint(name = "uk_direct_conversations_pair", columnNames = {"user_a_id", "user_b_id"})
    },
    indexes = {
        @Index(name = "idx_direct_conversations_user_a", columnList = "user_a_id"),
        @Index(name = "idx_direct_conversations_user_b", columnList = "user_b_id"),
        @Index(name = "idx_direct_conversations_last_message_at", columnList = "last_message_at")
    }
)
public class DirectConversation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_a_id", nullable = false)
    private Long userAId;

    @Column(name = "user_b_id", nullable = false)
    private Long userBId;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt = Instant.now();

    @Column(name = "last_message_at")
    private Instant lastMessageAt;

    public DirectConversation() {}

    public DirectConversation(Long userAId, Long userBId) {
        this.userAId = userAId;
        this.userBId = userBId;
    }

    public Long getId() {
        return id;
    }

    public Long getUserAId() {
        return userAId;
    }

    public void setUserAId(Long userAId) {
        this.userAId = userAId;
    }

    public Long getUserBId() {
        return userBId;
    }

    public void setUserBId(Long userBId) {
        this.userBId = userBId;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Instant getLastMessageAt() {
        return lastMessageAt;
    }

    public void setLastMessageAt(Instant lastMessageAt) {
        this.lastMessageAt = lastMessageAt;
    }
}

