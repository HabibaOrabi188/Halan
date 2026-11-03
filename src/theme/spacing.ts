// src/theme/spacing.ts
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  s,
  vs,
  ms,
  mvs,
} from 'react-native-size-matters';

/**
 * Responsive Spacing scale using react-native-size-matters.
 * Base scale is based on standard 4-point design system, scaled dynamically.
 */
export const spacing = {
  none: 0,
  xs: scale(4),
  sm: scale(8),
  md: scale(12),
  lg: scale(16),
  xl: scale(20),
  xxl: scale(24),
  xxxl: scale(32),
  // Additional tokens for larger gaps
  huge: scale(40),
  massive: scale(48),
  gigantic: scale(64),

  // Scaling helpers directly on spacing object
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  s,
  vs,
  ms,
  mvs,
};

export {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  s,
  vs,
  ms,
  mvs,
};

export type Spacing = typeof spacing;

