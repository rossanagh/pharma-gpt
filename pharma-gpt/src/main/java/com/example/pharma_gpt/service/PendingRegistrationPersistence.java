package com.example.pharma_gpt.service;

import com.example.pharma_gpt.dto.RegisterStartRequest;
import com.example.pharma_gpt.util.PersonNameUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.Duration;
import java.time.Instant;

/**
 * Scrie înregistrarea în curs prin UPSERT PostgreSQL (ON CONFLICT DO UPDATE), astfel nu mai apare
 * duplicate key la același email indiferent de ordinea operațiilor Hibernate sau de cereri simultane.
 */
@Service
public class PendingRegistrationPersistence {

    private static final String UPSERT_SQL = """
        INSERT INTO pending_registrations (
          email, first_name, last_name, county, phone_number, parafa, provider_type,
          medic_grade, specialty, academic_titles, password_hash, code_hash, expires_at, attempts, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, now())
        ON CONFLICT (email) DO UPDATE SET
          first_name = EXCLUDED.first_name,
          last_name = EXCLUDED.last_name,
          county = EXCLUDED.county,
          phone_number = EXCLUDED.phone_number,
          parafa = EXCLUDED.parafa,
          provider_type = EXCLUDED.provider_type,
          medic_grade = EXCLUDED.medic_grade,
          specialty = EXCLUDED.specialty,
          academic_titles = EXCLUDED.academic_titles,
          password_hash = EXCLUDED.password_hash,
          code_hash = EXCLUDED.code_hash,
          expires_at = EXCLUDED.expires_at,
          attempts = 0,
          created_at = now()
        """;

    private final JdbcTemplate jdbcTemplate;
    private final PasswordEncoder passwordEncoder;

    public PendingRegistrationPersistence(JdbcTemplate jdbcTemplate, PasswordEncoder passwordEncoder) {
        this.jdbcTemplate = jdbcTemplate;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void replacePending(RegisterStartRequest request, String email, String code, int ttlMinutes) {
        String firstName = PersonNameUtils.formatPersonName(request.firstName());
        String lastName = PersonNameUtils.formatPersonName(request.lastName());
        String county = request.county().trim();
        String phoneNumber = request.phoneNumber() == null ? null : request.phoneNumber().trim();
        String parafa = request.parafa().trim();
        String providerType = request.providerType().trim();
        String medicGrade;
        String specialty = request.specialty().trim();
        if ("medic".equals(providerType)) {
            medicGrade = request.medicGrade() != null ? request.medicGrade().trim() : null;
        } else {
            medicGrade = null;
        }
        String academicTitles = request.academicTitles() != null && !request.academicTitles().isBlank()
            ? request.academicTitles().trim()
            : null;
        String passwordHash = passwordEncoder.encode(request.password());
        String codeHash = passwordEncoder.encode(code);
        Instant expiresAt = Instant.now().plus(Duration.ofMinutes(ttlMinutes));

        jdbcTemplate.update(
            UPSERT_SQL,
            email,
            firstName,
            lastName,
            county,
            phoneNumber,
            parafa,
            providerType,
            medicGrade,
            specialty,
            academicTitles,
            passwordHash,
            codeHash,
            Timestamp.from(expiresAt)
        );
    }
}
