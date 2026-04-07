package com.example.pharma_gpt.repository;

import com.example.pharma_gpt.entity.DirectMessage;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

public interface DirectMessageRepository extends JpaRepository<DirectMessage, Long> {

    Optional<DirectMessage> findTopByConversationIdOrderByCreatedAtDesc(Long conversationId);

    @Query("""
        select m from DirectMessage m
        where m.conversation.id = :conversationId
        order by m.createdAt desc
        """)
    List<DirectMessage> listLatestMessages(@Param("conversationId") Long conversationId,
                                     Pageable pageable);

    @Query("""
        select m from DirectMessage m
        where m.conversation.id = :conversationId
          and m.createdAt < :before
        order by m.createdAt desc
        """)
    List<DirectMessage> listMessagesBefore(@Param("conversationId") Long conversationId,
                                          @Param("before") Instant before,
                                          Pageable pageable);
}

