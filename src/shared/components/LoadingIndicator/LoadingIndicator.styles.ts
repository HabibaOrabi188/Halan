// src/shared/components/LoadingIndicator/LoadingIndicator.styles.ts
import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  overlayBox: {
    backgroundColor: colors.surface,
    padding: spacing.xl,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  text: {
    fontFamily: typography.fontFamily,
    fontSize: typography.body2.fontSize,
    color: colors.textPrimary,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
});
