import { StyleSheet } from 'react-native';
import { colors, radii, spacing, typography, scale } from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.foreground,
    marginTop: spacing.huge,
    borderTopRightRadius: radii.xxxl,
    borderTopLeftRadius: radii.xxxl,
    paddingTop: spacing.lg,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: spacing.huge,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.md,
    alignItems: 'flex-start',
  },
  forgotPasswordContainer: {
    marginBottom: spacing.lg,
    marginTop: -spacing.xs,
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: colors.primary,
    fontFamily: typography.fontFamily,
    fontSize: typography.body2.fontSize,
    fontWeight: typography.fontWeightMedium,
    textAlign: 'right',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
    gap: spacing.xs,
  },
  registerText: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily,
    fontSize: typography.body2.fontSize,
  },
  registerLink: {
    color: colors.primary,
    fontFamily: typography.fontFamily,
    fontSize: typography.body2.fontSize,
    fontWeight: typography.fontWeightBold,
  },
  formErrorText: {
    color: colors.error,
    fontFamily: typography.fontFamily,
    fontSize: typography.body2.fontSize,
    marginBottom: spacing.sm,
    textAlign: 'right',
  },
  eyeButton: {
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xs,
  },
  eyeButtonText: {
    color: colors.textMuted,
    fontSize: typography.caption.fontSize,
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeightMedium,
  },
  locationContainer: {
    width: '100%',
    padding: spacing.md,
    borderWidth: scale(1),
    borderRadius: radii.lg,
    gap: spacing.md,
    borderColor:colors.border,
    alignItems:"flex-start"
  },
  locationHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.sm,
  },
  locationBnt:{
    alignSelf:'center',
    width:'85%'
  },
   submitButton: {
    marginTop: spacing.xl,
    width: '100%',
  },
});
