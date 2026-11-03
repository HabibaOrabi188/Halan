// src/shared/components/AppButton/AppButton.styles.ts
import { StyleSheet } from 'react-native';
import { colors, spacing, radii, typography, scale } from '../../../theme';
import { ButtonSize, ButtonVariant } from '../../types';

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.md,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: spacing.sm,
  },
  iconRight: {
    marginLeft: spacing.sm,
  },
});

export const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'secondary':
      return {
        container: {
          backgroundColor: colors.surfaceSecondary,
          borderWidth: 1,
          borderColor: colors.border,
        },
        text: {
          color: colors.textPrimary,
        },
      };
    case 'outline':
      return {
        container: {
          backgroundColor: colors.transparent,
          borderWidth: 1.5,
          borderColor: colors.primary,
        },
        text: {
          color: colors.primary,
        },
      };
    case 'ghost':
      return {
        container: {
          backgroundColor: colors.transparent,
        },
        text: {
          color: colors.primary,
        },
      };
    case 'primary':
    default:
      return {
        container: {
          backgroundColor: colors.primary,
        },
        text: {
          color: colors.white,
        },
      };
  }
};

export const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return {
        container: {
          paddingVertical: spacing.sm,
          paddingHorizontal: spacing.md,
          minHeight: scale(25),
        },
        text: {
          fontSize: typography.caption.fontSize,
          fontWeight: typography.fontWeightMedium,
          fontFamily: typography.fontFamily,
        },
      };
    case 'lg':
      return {
        container: {
          paddingVertical: spacing.lg,
          paddingHorizontal: spacing.xxl,
          minHeight: scale(30),
        },
        text: {
          fontSize: typography.body1.fontSize,
          fontWeight: typography.fontWeightBold,
          fontFamily: typography.fontFamily,
        },
      };
    case 'md':
    default:
      return {
        container: {
          paddingVertical: spacing.md,
          paddingHorizontal: spacing.xl,
          minHeight: scale(35),
        },
        text: {
          fontSize: typography.body2.fontSize,
          fontWeight: typography.fontWeightMedium,
          fontFamily: typography.fontFamily,
        },
      };
  }
};
