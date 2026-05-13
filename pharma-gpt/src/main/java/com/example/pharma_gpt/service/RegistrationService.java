package com.example.pharma_gpt.service;

import com.example.pharma_gpt.dto.RegisterCompleteRequest;
import com.example.pharma_gpt.dto.RegisterStartRequest;
import com.example.pharma_gpt.entity.PendingRegistration;
import com.example.pharma_gpt.entity.User;
import com.example.pharma_gpt.repository.PendingRegistrationRepository;
import com.example.pharma_gpt.repository.UserRepository;
import com.example.pharma_gpt.util.PersonNameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.Locale;
import java.util.UUID;

@Service
public class RegistrationService {

    private static final List<String> ALLOWED_PROVIDER = List.of(
        "medic", "farmacist", "student", "asistent_medical", "asistent_farmacist"
    );
    private static final List<String> MEDIC_GRADES = List.of("rezident", "specialist", "primar");

    private final UserRepository userRepository;
    private final PendingRegistrationRepository pendingRepository;
    private final PasswordEncoder passwordEncoder;
    private final OtpService otpService;
    private final NotificationService notificationService;

    @Value("${pharma.registration.ttl-minutes:15}")
    private int ttlMinutes;

    @Value("${pharma.registration.max-attempts:6}")
    private int maxAttempts;

    public RegistrationService(
        UserRepository userRepository,
        PendingRegistrationRepository pendingRepository,
        PasswordEncoder passwordEncoder,
        OtpService otpService,
        NotificationService notificationService
    ) {
        this.userRepository = userRepository;
        this.pendingRepository = pendingRepository;
        this.passwordEncoder = passwordEncoder;
        this.otpService = otpService;
        this.notificationService = notificationService;
    }

    public void validateStartProfile(RegisterStartRequest request) {
        String pt = request.providerType().trim();
        if (!ALLOWED_PROVIDER.contains(pt)) {
            throw new IllegalArgumentException("Categorie profesională invalidă");
        }
        if ("medic".equals(pt)) {
            String mg = request.medicGrade() == null ? "" : request.medicGrade().trim();
            if (mg.isEmpty()) {
                throw new IllegalArgumentException("Selectați gradul (rezident / specialist / primar)");
            }
            if (!MEDIC_GRADES.contains(mg)) {
                throw new IllegalArgumentException("Grad profesional invalid");
            }
            if (request.specialty() == null || request.specialty().isBlank()) {
                throw new IllegalArgumentException("Selectați specialitatea medicală");
            }
        } else {
            if (request.specialty() == null || request.specialty().isBlank()) {
                throw new IllegalArgumentException("Completați specialitatea / domeniul");
            }
        }
    }

    @Transactional
    public void startRegistration(RegisterStartRequest request) {
        String email = request.email().trim().toLowerCase(Locale.ROOT);
        if (userRepository.existsByEmailIgnoreCase(email)) {
            throw new IllegalArgumentException("Email-ul este deja înregistrat");
        }
        validateStartProfile(request);

        pendingRepository.deleteByEmailIgnoreCase(email);

        String code = generateUniqueOtpForPending();
        PendingRegistration p = new PendingRegistration();
        p.setEmail(email);
        p.setFirstName(PersonNameUtils.formatPersonName(request.firstName()));
        p.setLastName(PersonNameUtils.formatPersonName(request.lastName()));
        p.setCounty(request.county().trim());
        p.setPhoneNumber(request.phoneNumber() == null ? null : request.phoneNumber().trim());
        p.setParafa(request.parafa().trim());
        p.setProviderType(request.providerType().trim());
        String pt = p.getProviderType();
        if ("medic".equals(pt)) {
            p.setMedicGrade(request.medicGrade().trim());
            p.setSpecialty(request.specialty().trim());
        } else {
            p.setMedicGrade(null);
            p.setSpecialty(request.specialty().trim());
        }
        if (request.academicTitles() != null && !request.academicTitles().isBlank()) {
            p.setAcademicTitles(request.academicTitles().trim());
        } else {
            p.setAcademicTitles(null);
        }
        p.setCodeHash(passwordEncoder.encode(code));
        p.setExpiresAt(Instant.now().plus(Duration.ofMinutes(ttlMinutes)));
        p.setAttempts(0);
        pendingRepository.save(p);

        notificationService.sendRegistrationCodeEmail(email, code, ttlMinutes);
    }

    /**
     * OTP unique among active users' login codes (very low collision probability).
     */
    private String generateUniqueOtpForPending() {
        for (int i = 0; i < 50; i++) {
            String c = otpService.generate6Digits();
            if (userRepository.findByLoginCode(c).isEmpty()) {
                return c;
            }
        }
        throw new IllegalStateException("Nu s-a putut genera un cod unic");
    }

    @Transactional
    public User completeRegistration(RegisterCompleteRequest request) {
        String email = request.email().trim().toLowerCase(Locale.ROOT);
        String code = request.code().trim();
        PendingRegistration p = pendingRepository.findByEmailIgnoreCase(email)
            .orElseThrow(() -> new IllegalArgumentException("Nu există o înregistrare în curs pentru acest email"));

        if (p.getExpiresAt().isBefore(Instant.now())) {
            pendingRepository.delete(p);
            throw new IllegalArgumentException("Codul a expirat. Solicitați un cod nou.");
        }
        if (p.getAttempts() >= maxAttempts) {
            throw new IllegalArgumentException("Prea multe încercări. Solicitați un cod nou.");
        }
        if (!passwordEncoder.matches(code, p.getCodeHash())) {
            p.setAttempts(p.getAttempts() + 1);
            pendingRepository.save(p);
            throw new IllegalArgumentException("Cod invalid");
        }

        if (userRepository.existsByEmailIgnoreCase(email)) {
            pendingRepository.delete(p);
            throw new IllegalArgumentException("Contul există deja");
        }

        if (userRepository.findByLoginCode(code).isPresent()) {
            throw new IllegalArgumentException("Cod indisponibil — solicitați un cod nou de pe email.");
        }

        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode("LEGACY_UNUSED_" + UUID.randomUUID()));
        user.setFirstName(p.getFirstName());
        user.setLastName(p.getLastName());
        user.setCounty(p.getCounty());
        user.setPhoneNumber(p.getPhoneNumber());
        user.setParafa(p.getParafa());
        user.setProviderType(p.getProviderType());
        user.setMedicGrade(p.getMedicGrade());
        user.setSpecialty(p.getSpecialty());
        user.setAcademicTitles(p.getAcademicTitles());
        user.setLoginCode(code);
        user.syncFullName();
        userRepository.save(user);

        pendingRepository.delete(p);
        return user;
    }
}
