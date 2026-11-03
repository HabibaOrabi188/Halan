// src/theme/index.ts

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './radii';

import { colors } from './colors';
import { typography } from './typography';
import {
  spacing,
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  s,
  vs,
  ms,
  mvs,
} from './spacing';
import { radii } from './radii';

export const theme = {
  colors,
  typography,
  spacing,
  radii,
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  s,
  vs,
  ms,
  mvs,
} as const;

export type Theme = typeof theme;
export default theme;
