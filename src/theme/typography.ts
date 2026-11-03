// src/theme/typography.ts
import { moderateScale } from 'react-native-size-matters';

export const typography = {
  
  fontFamily: 'NotoSans',

  fontWeightRegular: '400' as const,
  fontWeightMedium: '500' as const,
  fontWeightBold: '700' as const,
  fontWeightExtrabold: '800' as const,
  
  h1: { fontSize: moderateScale(32), lineHeight: moderateScale(40) },
  h2: { fontSize: moderateScale(24), lineHeight: moderateScale(32) },
  h3: { fontSize: moderateScale(20), lineHeight: moderateScale(28) },
  body1: { fontSize: moderateScale(16), lineHeight: moderateScale(24) },
  body2: { fontSize: moderateScale(14), lineHeight: moderateScale(20) },
  caption: { fontSize: moderateScale(12), lineHeight: moderateScale(16) },
} as const;

export type Typography = typeof typography;
