import type { UserProfile } from '@/types/user/UserProfile';

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    user: UserProfile;
}
