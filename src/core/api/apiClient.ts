// src/core/api/apiClient.ts
import { API_BASE_URL } from './endpoints';
import { RequestConfig, ApiResponse } from '../types';
import { ApiError, NetworkError } from '../errors';
import { storage } from '../storage';
import { APP_CONFIG } from '../constants';

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  public setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  private async getAuthHeader(): Promise<Record<string, string>> {
    const tokens = await storage.getTokens();
    if (tokens?.accessToken) {
      return { Authorization: `Bearer ${tokens.accessToken}` };
    }
    return {};
  }

  private buildUrl(path: string, params?: Record<string, string | number | boolean | undefined>): string {
    const fullUrl = path.startsWith('http') ? path : `${this.baseUrl}${path}`;
    if (!params) return fullUrl;

    const queryParts: string[] = [];
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null) {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(val))}`);
      }
    });

    if (queryParts.length === 0) return fullUrl;
    const delimiter = fullUrl.includes('?') ? '&' : '?';
    return `${fullUrl}${delimiter}${queryParts.join('&')}`;
  }

  public async request<T = any>(
    path: string,
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    body?: unknown,
    config: RequestConfig = {},
  ): Promise<ApiResponse<T>> {
    const {
      headers = {},
      params,
      timeout = APP_CONFIG.API_TIMEOUT_MS,
      requiresAuth = true,
    } = config;

    const url = this.buildUrl(path, params);
    const authHeaders = requiresAuth ? await this.getAuthHeader() : {};

    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...authHeaders,
      ...headers,
    };

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        method,
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timer);

      const contentType = response.headers.get('content-type');
      let responseData: any = null;

      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        const text = await response.text();
        responseData = { message: text };
      }

      if (!response.ok) {
        throw new ApiError(
          responseData?.message || `Request failed with status ${response.status}`,
          response.status,
          responseData?.code || 'API_ERROR',
          responseData?.errors || responseData,
        );
      }

      return {
        data: responseData?.data ?? responseData,
        message: responseData?.message,
        success: true,
        statusCode: response.status,
      };
    } catch (error: any) {
      clearTimeout(timer);

      if (error?.name === 'AbortError') {
        throw new NetworkError('Request timed out. Please try again.');
      }

      if (error instanceof ApiError) {
        throw error;
      }

      throw new NetworkError(error?.message || 'Network request failed', error);
    }
  }

  public get<T = any>(path: string, config?: RequestConfig) {
    return this.request<T>(path, 'GET', undefined, config);
  }

  public post<T = any>(path: string, body?: unknown, config?: RequestConfig) {
    return this.request<T>(path, 'POST', body, config);
  }

  public put<T = any>(path: string, body?: unknown, config?: RequestConfig) {
    return this.request<T>(path, 'PUT', body, config);
  }

  public patch<T = any>(path: string, body?: unknown, config?: RequestConfig) {
    return this.request<T>(path, 'PATCH', body, config);
  }

  public delete<T = any>(path: string, config?: RequestConfig) {
    return this.request<T>(path, 'DELETE', undefined, config);
  }
}

export const apiClient = new ApiClient();
