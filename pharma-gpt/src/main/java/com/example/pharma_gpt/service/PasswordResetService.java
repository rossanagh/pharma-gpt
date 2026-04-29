package com.example.pharma_gpt.service;

import com.example.pharma_gpt.entity.PasswordResetCode;
import com.example.pharma_gpt.entity.User;
import com.example.pharma_gpt.repository.PasswordResetCodeRepository;
import com.example.pharma_gpt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
import java.util.Locale;
import java.util.Optional;
import java.util.regex.Pattern;

@Service
public class PasswordResetService {
    private static final Pattern EMAIL = Pattern.compile("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$");
    private static final Pattern PHONE = Pattern.compile("^[0-9+()\\s-]{6,30}$");

    private final UserRepository userRepository;
    private final PasswordResetCodeRepository codeRepository;
    private final PasswordEncoder passwordEncoder;
    private final OtpService otpService;
    private final NotificationService notificationService;

    @Value("${pharma.reset.ttl-minutes:10}")
    private int ttlMinutes;

    @Value("${pharma.reset.max-attempts:6}")
    private int maxAttempts;

    public PasswordResetService(
        UserRepository userRepository,
        PasswordResetCodeRepository codeRepository,
        PasswordEncoder passwordEncoder,
        OtpService otpService,
        NotificationService notificationService
    ) {
        this.userRepository = userRepository;
        this.codeRepository = codeRepository;
        this.passwordEncoder = passwordEncoder;
        this.otpService = otpService;
        this.notificationService = notificationService;
    }

    /** Always returns ok (anti-enumeration). */
    public void requestReset(String rawTarget) {
        String target = normalizeTarget(rawTarget);
        if (target == null) {
            return;
        }
        Optional<User> userOpt = findUserByTarget(target);
        if (userOpt.isEmpty()) {
            // Don't disclose account existence.
            return;
        }
        String code = otpService.generate6Digits();
        PasswordResetCode prc = new PasswordResetCode();
        prc.setTargetNormalized(target);
        prc.setCodeHash(passwordEncoder.encode(code));
        prc.setExpiresAt(Instant.now().plus(Duration.ofMinutes(ttlMinutes)));
        codeRepository.save(prc);

        if (isEmail(target)) {
            notificationService.sendPasswordResetCodeEmail(target, code);
        } else {
            notificationService.sendPasswordResetCodeSms(target, code);
        }
    }

    public void confirmReset(String rawTarget, String code, String newPassword) {
        String target = normalizeTarget(rawTarget);
        if (target == null) {
            throw new IllegalArgumentException("Invalid target");
        }
        if (newPassword == null || newPassword.trim().length() < 8) {
            throw new IllegalArgumentException("Password must be at least 8 characters");
        }
        PasswordResetCode prc = codeRepository
            .findLatestActive(target, Instant.now())
            .orElseThrow(() -> new IllegalArgumentException("Invalid or expired code"));

        if (prc.getAttempts() >= maxAttempts) {
            throw new IllegalArgumentException("Too many attempts. Request a new code.");
        }
        if (code == null || code.isBlank() || !passwordEncoder.matches(code.trim(), prc.getCodeHash())) {
            prc.incrementAttempts();
            codeRepository.save(prc);
            throw new IllegalArgumentException("Invalid or expired code");
        }

        User user = findUserByTarget(target).orElseThrow(() -> new IllegalArgumentException("Invalid target"));
        user.setPassword(passwordEncoder.encode(newPassword.trim()));
        userRepository.save(user);

        prc.setUsed(true);
        codeRepository.save(prc);
    }

    private Optional<User> findUserByTarget(String targetNormalized) {
        if (isEmail(targetNormalized)) {
            return userRepository.findByEmailIgnoreCase(targetNormalized);
        }
        return userRepository.findByPhoneNumber(targetNormalized);
    }

    private static boolean isEmail(String s) {
        return s != null && EMAIL.matcher(s).matches();
    }

    private static String normalizeTarget(String raw) {
        if (raw == null) return null;
        String t = raw.trim();
        if (t.isEmpty()) return null;
        if (EMAIL.matcher(t).matches()) {
            return t.toLowerCase(Locale.ROOT);
        }
        if (PHONE.matcher(t).matches()) {
            // keep as-is but trim spaces
            return t.replaceAll("\\s+", " ").trim();
        }
        return null;
    }
}

