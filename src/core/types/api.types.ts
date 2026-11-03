export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean | undefined>;
  timeout?: number;
  requiresAuth?: boolean;
}

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  statusCode: number;
}

export interface ApiErrorResponse {
  message: string;
  code?: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginationMeta;
}
