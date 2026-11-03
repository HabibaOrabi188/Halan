// src/core/errors/AppError.ts

export class AppError extends Error {
  public readonly code: string;
  public readonly statusCode?: number;
  public readonly details?: unknown;

  constructor(
    message: string,
    code: string = 'UNKNOWN_ERROR',
    statusCode?: number,
    details?: unknown,
  ) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NetworkError extends AppError {
  constructor(message: string = 'Network connection failed. Please check your internet.', details?: unknown) {
    super(message, 'NETWORK_ERROR', 0, details);
    this.name = 'NetworkError';
  }
}

export class ApiError extends AppError {
  constructor(
    message: string,
    statusCode: number = 500,
    code: string = 'API_ERROR',
    details?: unknown,
  ) {
    super(message, code, statusCode, details);
    this.name = 'ApiError';
  }
}

export class AuthError extends AppError {
  constructor(message: string = 'Session expired or unauthenticated.', statusCode: number = 401) {
    super(message, 'AUTH_ERROR', statusCode);
    this.name = 'AuthError';
  }
}

export class ValidationError extends AppError {
  public readonly validationErrors?: Record<string, string[]>;

  constructor(
    message: string = 'Validation failed.',
    validationErrors?: Record<string, string[]>,
  ) {
    super(message, 'VALIDATION_ERROR', 422, validationErrors);
    this.name = 'ValidationError';
    this.validationErrors = validationErrors;
  }
}

export const handleError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message, 'UNEXPECTED_ERROR', undefined, error.stack);
  }

  return new AppError('An unexpected error occurred.', 'UNKNOWN_ERROR', undefined, error);
};
