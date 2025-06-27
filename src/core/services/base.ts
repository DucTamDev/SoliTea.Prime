import { addHttpInterceptor } from '@/core/interceptors/request';
import axios, { type AxiosInstance, type AxiosRequestConfig, type RawAxiosRequestHeaders } from 'axios';

class BaseService {
    private http!: AxiosInstance;
    private baseURL: string = '';
    private headers: RawAxiosRequestHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    };
    private config: AxiosRequestConfig = {};

    constructor(baseURL: string) {
        this.baseURL = baseURL;

        this.initialize();
    }

    private initialize() {
        this.config = this.defaultConfig();
        this.http = axios.create(this.config);
        addHttpInterceptor(this.http);
    }

    // Method to create default AxiosRequestConfig
    private defaultConfig(): AxiosRequestConfig {
        return {
            baseURL: `${this.baseURL}`,
            headers: this.headers,
            timeout: 10000 // Set a default timeout (optional)
        };
    }

    // Merge config with default this.config
    private mergeConfig(config: AxiosRequestConfig): AxiosRequestConfig {
        return Object.assign({}, this.config, config);
    }

    // GET request method
    protected async get<TResponse>(url: string, config: AxiosRequestConfig = {}): Promise<TResponse> {
        const finalConfig = this.mergeConfig(config);
        const response = await this.http.get<TResponse>(url, finalConfig);
        return response.data;
    }

    // POST request method
    protected async post<TResponse>(url: string, data: any, config: AxiosRequestConfig = {}): Promise<TResponse> {
        const finalConfig = this.mergeConfig(config);
        const response = await this.http.post<TResponse>(url, data, finalConfig);
        return response.data;
    }

    // PUT request method
    protected async put<TResponse>(url: string, data: any, config: AxiosRequestConfig = {}): Promise<TResponse> {
        const finalConfig = this.mergeConfig(config);
        const response = await this.http.put<TResponse>(url, data, finalConfig);
        return response.data;
    }

    // DELETE request method
    protected async delete<TResponse>(url: string, config: AxiosRequestConfig = {}): Promise<TResponse> {
        const finalConfig = this.mergeConfig(config);
        const response = await this.http.delete<TResponse>(url, finalConfig);
        return response.data;
    }
}

export default BaseService;
