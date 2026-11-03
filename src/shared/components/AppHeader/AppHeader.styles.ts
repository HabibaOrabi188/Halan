// src/shared/components/AppHeader/AppHeader.styles.ts
import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  leftAction: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontSize: 22,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
  },
  title: {
    fontFamily: typography.fontFamily,
    fontSize: typography.h3.fontSize,
    fontWeight: typography.fontWeightBold,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: typography.fontFamily,
    fontSize: typography.caption.fontSize,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 2,
  },
  rightAction: {
    minWidth: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
