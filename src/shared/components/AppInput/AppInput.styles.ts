// src/shared/components/AppInput/AppInput.styles.ts
import { StyleSheet } from 'react-native';
import { colors, radii, spacing, typography } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: spacing.md,
    alignItems:'flex-start'
  },
  label: {
    fontFamily: typography.fontFamily,
    fontSize: typography.body2.fontSize,
    fontWeight: typography.fontWeightMedium,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    minHeight: 48,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  inputError: {
    borderColor: colors.error,
  },
  inputDisabled: {
    backgroundColor: colors.paleGreen,
    opacity: 0.6,
  },
  input: {
    flex: 1,
    fontFamily: typography.fontFamily,
    fontSize: typography.body1.fontSize,
    color: colors.textPrimary,
    paddingVertical: spacing.sm,
  },
  inputRTL: {
    textAlign: 'right',
  },
  inputLTR: {
    textAlign: 'left',
  },
  leftIcon: {
    marginRight: spacing.sm,
  },
  rightIcon: {
    marginLeft: spacing.sm,
  },
  helperText: {
    fontFamily: typography.fontFamily,
    fontSize: typography.caption.fontSize,
    color: colors.textMuted,
    marginTop: spacing.xs,
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  errorText: {
    fontFamily: typography.fontFamily,
    fontSize: typography.caption.fontSize,
    color: colors.error,
    marginTop: spacing.xs,
    textAlign: 'right',
    writingDirection: 'rtl',
  },
});
