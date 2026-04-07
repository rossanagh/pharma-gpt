package com.example.pharma_gpt.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.Instant;
import java.util.Locale;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false, unique = true)
    @Email
    private String email;

    @NotBlank
    @Column(nullable = false)
    private String password;

    @NotBlank
    @Column(nullable = false)
    private String fullName;

    @NotBlank
    @Size(max = 100)
    @Column(name = "first_name", nullable = false)
    private String firstName;

    @NotBlank
    @Size(max = 100)
    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Size(max = 30)
    @Column(name = "phone_number")
    private String phoneNumber;

    @Size(max = 255)
    @Column(name = "parafa")
    private String parafa;

    @Size(max = 50)
    @Column(name = "provider_type")
    private String providerType; // medic, farmacist, veterinar, etc

    @Size(max = 120)
    @Column(name = "specialty")
    private String specialty;

    /** Pentru medici: rezident, specialist, primar */
    @Size(max = 50)
    @Column(name = "medic_grade")
    private String medicGrade;

    @Size(max = 500)
    @Column(name = "academic_titles")
    private String academicTitles;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(name = "avatar_bytes")
    private byte[] avatarBytes;

    @Column(name = "avatar_content_type")
    private String avatarContentType;

    private String role = "ROLE_USER";

    @Column(name = "created_at")
    private Instant createdAt = Instant.now();

    @PrePersist
    @PreUpdate
    void normalizeEmail() {
        if (email != null) {
            email = email.trim().toLowerCase(Locale.ROOT);
        }
    }

    public User() {}

    public User(String email, String password, String fullName) {
        this.email = email;
        this.password = password;
        this.fullName = fullName;
    }

    public void syncFullName() {
        String fn = firstName == null ? "" : firstName.trim();
        String ln = lastName == null ? "" : lastName.trim();
        String combined = (fn + " " + ln).trim();
        if (!combined.isBlank()) {
            this.fullName = combined;
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
        syncFullName();
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
        syncFullName();
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getParafa() {
        return parafa;
    }

    public void setParafa(String parafa) {
        this.parafa = parafa;
    }

    public String getProviderType() {
        return providerType;
    }

    public void setProviderType(String providerType) {
        this.providerType = providerType;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public String getMedicGrade() {
        return medicGrade;
    }

    public void setMedicGrade(String medicGrade) {
        this.medicGrade = medicGrade;
    }

    public String getAcademicTitles() {
        return academicTitles;
    }

    public void setAcademicTitles(String academicTitles) {
        this.academicTitles = academicTitles;
    }

    public byte[] getAvatarBytes() {
        return avatarBytes;
    }

    public void setAvatarBytes(byte[] avatarBytes) {
        this.avatarBytes = avatarBytes;
    }

    public String getAvatarContentType() {
        return avatarContentType;
    }

    public void setAvatarContentType(String avatarContentType) {
        this.avatarContentType = avatarContentType;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
