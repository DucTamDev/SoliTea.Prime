import BaseService from '@/core/services/base';
import type { BaseResponseModel } from '@/core/types/BaseResponseModel';
import { type LoginPayload, type LoginResponse, type RegisterPayload, type RegisterResponse } from '@/types/auth/index';

const AUTH_BASE_URL = 'https://localhost:44388';

class AuthService extends BaseService {
    constructor() {
        super(AUTH_BASE_URL);
    }

    public async login(payload: LoginPayload): Promise<BaseResponseModel<LoginResponse>> {
        return this.post<BaseResponseModel<LoginResponse>>('/api/auth/login', payload);
    }

    public async register(payload: RegisterPayload): Promise<BaseResponseModel<RegisterResponse>> {
        return this.post<BaseResponseModel<RegisterResponse>>('/register', payload);
    }

    public async refreshToken(refreshToken: string): Promise<{ accessToken: string; expiresIn: number }> {
        return this.post('/refresh-token', { refreshToken });
    }
}

export default new AuthService();
