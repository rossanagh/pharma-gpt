package com.example.pharma_gpt.repository;

import com.example.pharma_gpt.entity.NewsItem;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

public interface NewsItemRepository extends JpaRepository<NewsItem, Long> {

    @Query("SELECT n FROM NewsItem n WHERE n.source = :source ORDER BY n.publishedAt DESC")
    List<NewsItem> findLatestBySource(@Param("source") String source, Pageable pageable);

    boolean existsByUrl(String url);

    Optional<NewsItem> findByUrl(String url);

    @Modifying
    @Query("delete from NewsItem n where n.publishedAt < :cutoff")
    int deleteOlderThan(Instant cutoff);

    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Query("delete from NewsItem n where n.source <> :source")
    int deleteBySourceNot(@Param("source") String source);
}

