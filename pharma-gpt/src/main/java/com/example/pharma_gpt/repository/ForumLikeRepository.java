package com.example.pharma_gpt.repository;

import com.example.pharma_gpt.entity.ForumLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ForumLikeRepository extends JpaRepository<ForumLike, Long> {

    long countByPostId(Long postId);

    boolean existsByPostIdAndUserId(Long postId, Long userId);

    Optional<ForumLike> findByPostIdAndUserId(Long postId, Long userId);
}

