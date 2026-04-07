package com.example.pharma_gpt.controller;

import com.example.pharma_gpt.dto.UpdateProfileRequest;
import com.example.pharma_gpt.dto.UserProfileResponse;
import com.example.pharma_gpt.dto.UserSummaryResponse;
import com.example.pharma_gpt.entity.User;
import com.example.pharma_gpt.repository.UserRepository;
import com.example.pharma_gpt.service.PresenceService;
import com.example.pharma_gpt.util.PersonNameUtils;
import jakarta.validation.Valid;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.domain.PageRequest;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;
    private final PresenceService presenceService;

    public UserController(UserRepository userRepository, PresenceService presenceService) {
        this.userRepository = userRepository;
        this.presenceService = presenceService;
    }

    @GetMapping("/search")
    public ResponseEntity<List<UserSummaryResponse>> search(@RequestParam("q") String q) {
        String trimmed = q == null ? "" : q.trim();
        if (trimmed.isBlank()) {
            return ResponseEntity.ok(List.of());
        }
        String[] parts = trimmed.split("\\s+");
        String t1 = parts.length > 0 ? parts[0] : "";
        String t2 = parts.length > 1 ? parts[1] : "";
        String t3 = parts.length > 2 ? parts[2] : "";

        var users = userRepository.searchTop20(t1, t2, t3, PageRequest.of(0, 20));
        var result = users.stream()
            .map(u -> new UserSummaryResponse(
                u.getId(),
                u.getEmail(),
                u.getFirstName(),
                u.getLastName(),
                u.getParafa(),
                u.getProviderType(),
                u.getSpecialty(),
                u.getAvatarBytes() != null && u.getAvatarBytes().length > 0,
                presenceService.isOnline(u.getEmail())
            ))
            .toList();
        return ResponseEntity.ok(result);
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        return userRepository.findByEmailIgnoreCase(email)
            .<ResponseEntity<?>>map(u -> ResponseEntity.ok(toProfileResponse(u)))
            .orElse(ResponseEntity.status(404).body(Map.of("error", "User not found")));
    }

    @PutMapping("/me")
    public ResponseEntity<?> updateMe(Authentication authentication,
                                     @Valid @RequestBody UpdateProfileRequest request) {
        String email = (String) authentication.getPrincipal();
        return userRepository.findByEmailIgnoreCase(email)
            .<ResponseEntity<?>>map(u -> {
                u.setFirstName(PersonNameUtils.formatPersonName(request.firstName()));
                u.setLastName(PersonNameUtils.formatPersonName(request.lastName()));
                u.setPhoneNumber(request.phoneNumber());
                u.setParafa(request.parafa());
                u.setProviderType(request.providerType());
                u.setMedicGrade(request.medicGrade());
                u.setSpecialty(request.specialty());
                u.setAcademicTitles(request.academicTitles());
                userRepository.save(u);
                return ResponseEntity.ok(toProfileResponse(u));
            })
            .orElse(ResponseEntity.status(404).body(Map.of("error", "User not found")));
    }

    private static UserProfileResponse toProfileResponse(User u) {
        return new UserProfileResponse(
            u.getEmail(),
            u.getFirstName(),
            u.getLastName(),
            u.getPhoneNumber(),
            u.getParafa(),
            u.getProviderType(),
            u.getMedicGrade(),
            u.getSpecialty(),
            u.getAcademicTitles(),
            u.getAvatarBytes() != null && u.getAvatarBytes().length > 0
        );
    }

    @PostMapping(value = "/me/avatar", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadAvatar(Authentication authentication,
                                          @RequestPart("file") MultipartFile file) throws Exception {
        String email = (String) authentication.getPrincipal();
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Fișier invalid"));
        }
        if (file.getSize() > 2 * 1024 * 1024) {
            return ResponseEntity.badRequest().body(Map.of("error", "Imaginea e prea mare (max 2MB)"));
        }
        String contentType = file.getContentType();
        if (contentType == null || (!contentType.startsWith("image/"))) {
            return ResponseEntity.badRequest().body(Map.of("error", "Acceptăm doar imagini"));
        }

        return userRepository.findByEmailIgnoreCase(email)
            .<ResponseEntity<?>>map(u -> {
                try {
                    u.setAvatarBytes(file.getBytes());
                    u.setAvatarContentType(contentType);
                    userRepository.save(u);
                    return ResponseEntity.ok(Map.of("ok", true));
                } catch (Exception e) {
                    return ResponseEntity.status(500).body(Map.of("error", "Upload eșuat"));
                }
            })
            .orElse(ResponseEntity.status(404).body(Map.of("error", "User not found")));
    }

    @GetMapping("/me/avatar")
    public ResponseEntity<byte[]> getAvatar(Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        return userRepository.findByEmailIgnoreCase(email)
            .filter(u -> u.getAvatarBytes() != null && u.getAvatarBytes().length > 0)
            .map(u -> ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(u.getAvatarContentType() == null ? "image/jpeg" : u.getAvatarContentType()))
                .body(u.getAvatarBytes()))
            .orElse(ResponseEntity.notFound().build());
    }
}

