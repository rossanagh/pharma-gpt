package com.example.pharma_gpt.repository;

import com.example.pharma_gpt.entity.ForumPost;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ForumPostRepository extends JpaRepository<ForumPost, Long> {

    @Query("select p from ForumPost p order by p.createdAt desc")
    List<ForumPost> listLatest(Pageable pageable);

    /**
     * ID-uri în ordine descrescătoare după număr de like-uri, apoi după dată.
     * Doar coloana {@code id} — evită mapări greșite la {@code SELECT p.*} în native query.
     */
    @Query(
        value = """
            SELECT p.id FROM forum_posts p
            LEFT JOIN (
                SELECT post_id, COUNT(*) AS cnt FROM forum_likes GROUP BY post_id
            ) agg ON agg.post_id = p.id
            ORDER BY COALESCE(agg.cnt, 0) DESC, p.created_at DESC
            LIMIT :limit
            """,
        nativeQuery = true
    )
    List<Long> listPopularPostIds(@Param("limit") int limit);
}

