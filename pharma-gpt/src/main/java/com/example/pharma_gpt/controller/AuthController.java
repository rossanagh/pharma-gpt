package com.example.pharma_gpt.controller;

import com.example.pharma_gpt.config.JwtConfig;
import com.example.pharma_gpt.dto.LoginRequest;
import com.example.pharma_gpt.dto.LoginResponse;
import com.example.pharma_gpt.dto.PasswordResetConfirmRequest;
import com.example.pharma_gpt.dto.PasswordResetRequest;
import com.example.pharma_gpt.dto.RegisterRequest;
import com.example.pharma_gpt.entity.User;
import com.example.pharma_gpt.repository.UserRepository;
import com.example.pharma_gpt.service.PasswordResetService;
import com.example.pharma_gpt.util.PersonNameUtils;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final List<String> ALLOWED_PROVIDER = List.of(
        "medic", "farmacist", "asistent_medical", "asistent_farmacist"
    );
    private static final List<String> MEDIC_GRADES = List.of("rezident", "specialist", "primar");

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtConfig jwtConfig;
    private final PasswordResetService passwordResetService;

    public AuthController(UserRepository userRepository,
                          PasswordEncoder passwordEncoder,
                          JwtConfig jwtConfig,
                          PasswordResetService passwordResetService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtConfig = jwtConfig;
        this.passwordResetService = passwordResetService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        String email = request.email().trim();
        String password = request.password().trim();
        var userOpt = userRepository.findByEmailIgnoreCase(email)
            .filter(user -> passwordEncoder.matches(password, user.getPassword()));
        if (userOpt.isPresent()) {
            var user = userOpt.get();
            String token = jwtConfig.generateToken(user.getEmail(), user.getFullName());
            return ResponseEntity.ok(buildLoginResponse(token, user));
        }
        return ResponseEntity.status(401).body(Map.of("error", "Credențiale invalide"));
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
            user.setSpecialty(null);
        }
        if (request.academicTitles() != null && !request.academicTitles().isBlank()) {
            user.setAcademicTitles(request.academicTitles().trim());
        }
        userRepository.save(user);
        String token = jwtConfig.generateToken(user.getEmail(), user.getFullName());
        return ResponseEntity.ok(buildLoginResponse(token, user));
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
