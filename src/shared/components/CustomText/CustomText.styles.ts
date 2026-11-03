// src/shared/components/CustomText/CustomText.styles.ts
import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../theme';

export const styles = StyleSheet.create({
  base: {
    fontFamily: typography.fontFamily,
    color: colors.textPrimary,
    fontSize: typography.body1.fontSize,
    lineHeight: typography.body1.lineHeight,
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  h1: {
    fontSize: typography.h1.fontSize,
    lineHeight: typography.h1.lineHeight,
    fontWeight: typography.fontWeightBold,
  },
  h2: {
    fontSize: typography.h2.fontSize,
    lineHeight: typography.h2.lineHeight,
    fontWeight: typography.fontWeightBold,
  },
  h3: {
    fontSize: typography.h3.fontSize,
    lineHeight: typography.h3.lineHeight,
    fontWeight: typography.fontWeightBold,
  },
  body1: {
    fontSize: typography.body1.fontSize,
    lineHeight: typography.body1.lineHeight,
  },
  body2: {
    fontSize: typography.body2.fontSize,
    lineHeight: typography.body2.lineHeight,
  },
  caption: {
    fontSize: typography.caption.fontSize,
    lineHeight: typography.caption.lineHeight,
  },
});
