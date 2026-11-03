// src/features/onboarding/pages/onboarding/OnboardingScreen.styles.ts
import { StyleSheet } from 'react-native';
import { colors, spacing, radii, typography, scale, verticalScale } from '../../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.foreground,
    alignItems: "center",
    justifyContent:'center'
  },
  slideList: {
    flex: 1,
  },
  slide: {
    width: '100%',
    height: '100%',
  },
  img: {
    width: '96%',
    height: '40%',
    borderRadius: radii.lg,
    alignSelf:'center',
    
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  slideContent: {
    paddingHorizontal: spacing.xxl,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  title: {
    ...typography.h1,
    fontWeight: typography.fontWeightBold,
    textAlign: 'center',
    lineHeight: 38,
    marginBottom: spacing.sm,
    textShadowColor: colors.border,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    color:colors.primaryDark,
    marginTop:spacing.xxxl
  },
  description: {
    ...typography.body1,
    fontWeight:typography.fontWeightRegular,
    color: colors.primaryDark,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: spacing.lg,
    marginTop:spacing.lg
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  skipButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radii.xl,
    backgroundColor:colors.lightSage,
    borderWidth: 1,
    borderColor:colors.lightSage,
  },
  skipText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  footer: {
    paddingHorizontal: spacing.xxl,
    paddingBottom: spacing.xl,
    paddingTop: spacing.md,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.gigantic,
    height: 10,
  },
  dot: {
    height: 8,
    borderRadius: radii.full,
    marginHorizontal: 4,
  },
  dotActive: {
    width: 28,
    backgroundColor: colors.mutedGreen,
  },
  dotInactive: {
    width: 8,
    backgroundColor: colors.lightSage,
  },


 
});
