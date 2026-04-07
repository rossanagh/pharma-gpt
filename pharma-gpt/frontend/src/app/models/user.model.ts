export interface AppUser {
  fullName: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  providerType?: string | null;
  medicGrade?: string | null;
  specialty?: string | null;
  academicTitles?: string | null;
  parafa?: string | null;
}
