package com.example.pharma_gpt.controller;

import com.example.pharma_gpt.config.JwtConfig;
import com.example.pharma_gpt.dto.LoginRequest;
import com.example.pharma_gpt.dto.LoginResponse;
import com.example.pharma_gpt.dto.PasswordResetConfirmRequest;
import com.example.pharma_gpt.dto.PasswordResetRequest;
import com.example.pharma_gpt.dto.RegisterCompleteRequest;
import com.example.pharma_gpt.dto.RegisterRequest;
import com.example.pharma_gpt.dto.RegisterStartRequest;
import com.example.pharma_gpt.entity.User;
import com.example.pharma_gpt.repository.UserRepository;
import com.example.pharma_gpt.service.OtpService;
import com.example.pharma_gpt.service.PasswordResetService;
import com.example.pharma_gpt.service.RegistrationService;
import com.example.pharma_gpt.util.PersonNameUtils;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final Logger log = LoggerFactory.getLogger(AuthController.class);

    private static final List<String> ALLOWED_PROVIDER = List.of(
        "medic", "farmacist", "student", "asistent_medical", "asistent_farmacist"
    );
    private static final List<String> MEDIC_GRADES = List.of("rezident", "specialist", "primar");

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtConfig jwtConfig;
    private final PasswordResetService passwordResetService;
    private final RegistrationService registrationService;
    private final OtpService otpService;

    public AuthController(UserRepository userRepository,
                          PasswordEncoder passwordEncoder,
                          JwtConfig jwtConfig,
                          PasswordResetService passwordResetService,
                          RegistrationService registrationService,
                          OtpService otpService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtConfig = jwtConfig;
        this.passwordResetService = passwordResetService;
        this.registrationService = registrationService;
        this.otpService = otpService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        String rawCode = request.loginCode();
        if (rawCode != null && !rawCode.isBlank()) {
            String c = rawCode.trim().replaceAll("\\D", "");
            if (c.length() != 6) {
                return ResponseEntity.status(400).body(Map.of("error", "Codul trebuie să aibă exact 6 cifre."));
            }
            Optional<User> userOpt = userRepository.findByLoginCode(c);
            if (userOpt.isEmpty()) {
                return ResponseEntity.status(401).body(Map.of("error", "Cod invalid."));
            }
            User user = userOpt.get();
            return ResponseEntity.ok(buildLoginResponse(jwtConfig.generateToken(user.getEmail(), resolveFullName(user)), user));
        }
        if (request.email() == null || request.email().isBlank()
            || request.password() == null || request.password().isBlank()) {
            return ResponseEntity.status(400).body(Map.of("error", "Introduceți codul de 6 cifre sau email și parola."));
        }
        String email = request.email().trim();
        String password = request.password().trim();
        var userOpt = userRepository.findByEmailIgnoreCase(email)
            .filter(user -> passwordEncoder.matches(password, user.getPassword()));
        if (userOpt.isPresent()) {
            var user = userOpt.get();
            return ResponseEntity.ok(buildLoginResponse(jwtConfig.generateToken(user.getEmail(), resolveFullName(user)), user));
        }
        return ResponseEntity.status(401).body(Map.of("error", "Credențiale invalide"));
    }

    private String resolveFullName(User user) {
        String fullName = user.getFullName();
        if (fullName == null || fullName.isBlank()) {
            user.syncFullName();
            fullName = user.getFullName();
            if (fullName == null || fullName.isBlank()) {
                fullName = user.getEmail();
            } else {
                userRepository.save(user);
            }
        }
        return fullName;
    }

    @PostMapping("/register/start")
    public ResponseEntity<?> registerStart(@Valid @RequestBody RegisterStartRequest req) {
        try {
            registrationService.startRegistration(req);
            return ResponseEntity.ok(Map.of("ok", true));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).body(Map.of("error", e.getMessage()));
        } catch (DataAccessException e) {
            log.error("register/start database error for email={}", req.email(), e);
            return ResponseEntity.status(500).body(Map.of(
                "error",
                "Eroare la salvarea înregistrării (bază de date). Verifică în Neon că există coloana password_hash pe pending_registrations sau logurile Render pentru detaliu."
            ));
        } catch (Exception e) {
            log.error("register/start failed for email={}", req.email(), e);
            return ResponseEntity.status(500).body(Map.of("error", "Eroare la trimiterea codului. Încercați din nou."));
        }
    }

    @PostMapping("/register/complete")
    public ResponseEntity<?> registerComplete(@Valid @RequestBody RegisterCompleteRequest req) {
        try {
            User user = registrationService.completeRegistration(req);
            String token = jwtConfig.generateToken(user.getEmail(), resolveFullName(user));
            return ResponseEntity.ok(buildLoginResponse(token, user));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            log.error("register/complete failed for email={}", req.email(), e);
            return ResponseEntity.status(500).body(Map.of("error", "Eroare la activarea contului. Încercați din nou."));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        if (userRepository.existsByEmailIgnoreCase(request.email().trim())) {
            return ResponseEntity.status(400).body(Map.of("error", "Email-ul este deja înregistrat"));
        }
        String pt = request.providerType().trim();
        if (!ALLOWED_PROVIDER.contains(pt)) {
            return ResponseEntity.status(400).body(Map.of("error", "Categorie profesională invalidă"));
        }
        if ("medic".equals(pt)) {
            String mg = request.medicGrade() == null ? "" : request.medicGrade().trim();
            if (mg.isEmpty()) {
                return ResponseEntity.status(400).body(Map.of("error", "Selectați gradul (rezident / specialist / primar)"));
            }
            if (!MEDIC_GRADES.contains(mg)) {
                return ResponseEntity.status(400).body(Map.of("error", "Grad profesional invalid"));
            }
            if (request.specialty() == null || request.specialty().isBlank()) {
                return ResponseEntity.status(400).body(Map.of("error", "Selectați specialitatea medicală"));
            }
        }
        if (request.parafa() == null || request.parafa().isBlank()) {
            return ResponseEntity.status(400).body(Map.of("error", "Parafa este obligatorie"));
        }

        User user = new User();
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setFirstName(PersonNameUtils.formatPersonName(request.firstName()));
        user.setLastName(PersonNameUtils.formatPersonName(request.lastName()));
        user.setPhoneNumber(request.phoneNumber());
        user.setParafa(request.parafa().trim());
        user.setProviderType(pt);
        if ("medic".equals(pt)) {
            user.setMedicGrade(request.medicGrade().trim());
            user.setSpecialty(request.specialty().trim());
        } else {
            user.setMedicGrade(null);
            String sp = request.specialty() != null && !request.specialty().isBlank()
                ? request.specialty().trim()
                : null;
            if (sp == null && request.academicTitles() != null && !request.academicTitles().isBlank()) {
                sp = request.academicTitles().trim();
            }
            user.setSpecialty(sp == null || sp.isBlank() ? "—" : sp);
        }
        if (request.academicTitles() != null && !request.academicTitles().isBlank()) {
            user.setAcademicTitles(request.academicTitles().trim());
        }
        user.setCounty("—");
        assignUniqueLoginCode(user);
        userRepository.save(user);
        String fullName = resolveFullName(user);
        String token = jwtConfig.generateToken(user.getEmail(), fullName);
        return ResponseEntity.ok(buildLoginResponse(token, user));
    }

    private void assignUniqueLoginCode(User user) {
        for (int i = 0; i < 80; i++) {
            String c = otpService.generate6Digits();
            if (userRepository.findByLoginCode(c).isEmpty()) {
                user.setLoginCode(c);
                return;
            }
        }
        throw new IllegalStateException("Nu s-a putut genera cod de autentificare unic");
    }

    /**
     * Request a reset code via email or phone.
     * Always returns 200 (anti-enumeration).
     */
    @PostMapping("/password-reset/request")
    public ResponseEntity<?> requestPasswordReset(@Valid @RequestBody PasswordResetRequest request) {
        passwordResetService.requestReset(request.target());
        return ResponseEntity.ok(Map.of("ok", true));
    }

    @PostMapping("/password-reset/confirm")
    public ResponseEntity<?> confirmPasswordReset(@Valid @RequestBody PasswordResetConfirmRequest request) {
        try {
            passwordResetService.confirmReset(request.target(), request.code(), request.newPassword());
            return ResponseEntity.ok(Map.of("ok", true));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).body(Map.of("error", e.getMessage()));
        }
    }

    private static LoginResponse buildLoginResponse(String token, User user) {
        return new LoginResponse(
            token,
            user.getFullName(),
            user.getEmail(),
            user.getFirstName(),
            user.getLastName(),
            user.getProviderType(),
            user.getMedicGrade(),
            user.getSpecialty(),
            user.getAcademicTitles(),
            user.getParafa()
        );
    }
}
