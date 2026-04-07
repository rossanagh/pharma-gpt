package com.example.pharma_gpt.repository;

import com.example.pharma_gpt.entity.DirectConversation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DirectConversationRepository extends JpaRepository<DirectConversation, Long> {

    Optional<DirectConversation> findByUserAIdAndUserBId(Long userAId, Long userBId);

    List<DirectConversation> findByUserAIdOrUserBIdOrderByLastMessageAtDesc(Long userAId, Long userBId);
}

