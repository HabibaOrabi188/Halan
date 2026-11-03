// src/core/utils/formatters.ts

/**
 * Format currency with symbol and localized decimal separation.
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'EGP',
  locale: string = 'ar-EG',
): string => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${amount.toFixed(2)} ${currency}`;
  }
};

/**
 * Format date into human-readable string.
 */
export const formatDate = (
  date: string | number | Date,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  locale: string = 'ar-EG',
): string => {
  try {
    const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale, options).format(d);
  } catch {
    return String(date);
  }
};

/**
 * Truncate text with ellipsis.
 */
export const truncateText = (text: string, maxLength: number = 50): string => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};
