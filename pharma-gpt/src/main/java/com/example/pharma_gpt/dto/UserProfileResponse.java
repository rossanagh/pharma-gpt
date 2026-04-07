package com.example.pharma_gpt.dto;

/** Răspuns JSON pentru GET/PUT /api/users/me (serializare Jackson). */
public final class UserProfileResponse {

    private final String email;
    private final String firstName;
    private final String lastName;
    private final String phoneNumber;
    private final String parafa;
    private final String providerType;
    private final String medicGrade;
    private final String specialty;
    private final String academicTitles;
    private final boolean hasAvatar;

    public UserProfileResponse(
        String email,
        String firstName,
        String lastName,
        String phoneNumber,
        String parafa,
        String providerType,
        String medicGrade,
        String specialty,
        String academicTitles,
        boolean hasAvatar
    ) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.parafa = parafa;
        this.providerType = providerType;
        this.medicGrade = medicGrade;
        this.specialty = specialty;
        this.academicTitles = academicTitles;
        this.hasAvatar = hasAvatar;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getParafa() {
        return parafa;
    }

    public String getProviderType() {
        return providerType;
    }

    public String getMedicGrade() {
        return medicGrade;
    }

    public String getSpecialty() {
        return specialty;
    }

    public String getAcademicTitles() {
        return academicTitles;
    }

    public boolean getHasAvatar() {
        return hasAvatar;
    }
}
