// src/theme/radii.ts
/**
 * Border‑radius scale used throughout the app.
 * Values are in dp (density‑independent pixels).
 */
export const radii = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl:20,
  xxxl:24,
  huge:32,
  full: 9999, // for circular elements
} as const;

export type Radii = typeof radii;
