package com.example.pharma_gpt.repository;

import com.example.pharma_gpt.entity.PasswordResetCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.Optional;

public interface PasswordResetCodeRepository extends JpaRepository<PasswordResetCode, Long> {

    @Query("""
        select p from PasswordResetCode p
        where p.targetNormalized = :target
          and p.used = false
          and p.expiresAt > :now
        order by p.createdAt desc
        """)
    Optional<PasswordResetCode> findLatestActive(@Param("target") String target, @Param("now") Instant now);
}

