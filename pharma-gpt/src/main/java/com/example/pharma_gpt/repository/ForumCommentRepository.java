package com.example.pharma_gpt.repository;

import com.example.pharma_gpt.entity.ForumComment;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ForumCommentRepository extends JpaRepository<ForumComment, Long> {

    @Query("select c from ForumComment c where c.post.id = :postId order by c.createdAt asc")
    List<ForumComment> listByPost(@Param("postId") Long postId, Pageable pageable);

    long countByPostId(Long postId);
}

