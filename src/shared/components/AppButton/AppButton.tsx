// src/shared/components/AppButton/AppButton.tsx
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
} from 'react-native';
import { AppButtonProps } from '../../types';
import { getSizeStyles, getVariantStyles, styles } from './AppButton.styles';
import { colors } from '../../../theme';

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  fullWidth = false,
}) => {
  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size);
  const isDisabled = disabled || loading;

  const spinnerColor =
    variant === 'primary' ? colors.white : colors.primary;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        variantStyles.container,
        sizeStyles.container,
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        pressed && !isDisabled && { opacity: 0.8 },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={spinnerColor} size="small" />
      ) : (
        <View style={styles.contentContainer}>
          {leftIcon ? <View style={styles.iconLeft}>{leftIcon}</View> : null}
          <Text
            style={[
              variantStyles.text,
              sizeStyles.text,
              textStyle,
            ]}>
            {title}
          </Text>
          {rightIcon ? <View style={styles.iconRight}>{rightIcon}</View> : null}
        </View>
      )}
    </Pressable>
  );
};

export default AppButton;
