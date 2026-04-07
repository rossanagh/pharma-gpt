package com.example.pharma_gpt.entity;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(
    name = "forum_likes",
    uniqueConstraints = {
        @UniqueConstraint(name = "uk_forum_likes_post_user", columnNames = {"post_id", "user_id"})
    },
    indexes = {
        @Index(name = "idx_forum_likes_post", columnList = "post_id"),
        @Index(name = "idx_forum_likes_user", columnList = "user_id")
    }
)
public class ForumLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "post_id", nullable = false)
    private ForumPost post;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt = Instant.now();

    public ForumLike() {}

    public Long getId() {
        return id;
    }

    public ForumPost getPost() {
        return post;
    }

    public void setPost(ForumPost post) {
        this.post = post;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}

