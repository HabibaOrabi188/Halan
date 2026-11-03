// src/core/utils/validators.ts

/**
 * Validates common Egyptian / Arabic phone number formats.
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s-]/g, '');
  // Matches Egyptian (+201xxxxxxxxx or 01xxxxxxxxx) or standard international format
  return /^(\+201|01|201)[0-2,5]{1}[0-9]{8}$/.test(cleaned) || /^\+?[0-9]{9,15}$/.test(cleaned);
};

export const isValidEmail = (email: string): boolean => {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

export const isNotEmpty = (val: string | null | undefined): boolean => {
  return typeof val === 'string' && val.trim().length > 0;
};
