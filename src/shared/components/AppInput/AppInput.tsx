// src/shared/components/AppInput/AppInput.tsx
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import { AppInputProps } from '../../types';
import { styles } from './AppInput.styles';
import { colors, typography } from '../../../theme';
import CustomText from '../CustomText';

export const AppInput: React.FC<AppInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  helperText,
  disabled = false,
  secureTextEntry = false,
  leftIcon,
  rightIcon,
  style,
  inputStyle,
  multiline = false,
  numberOfLines = 1,
  keyboardType = 'default',
  autoCapitalize = 'none',
  isRTL = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {label ? 
      <CustomText
      title={label}
      color={colors.textPrimary}
      weight={typography.fontWeightMedium}
      size={typography.body1}
      style={styles.label}
      />
      : null}

      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          Boolean(error) && styles.inputError,
          disabled && styles.inputDisabled,
          multiline && { minHeight: 80, alignItems: 'flex-start' },
        ]}>
        {leftIcon ? <View style={styles.leftIcon}>{leftIcon}</View> : null}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          editable={!disabled}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.input,
            isRTL ? styles.inputRTL : styles.inputLTR,
            inputStyle,
          ]}
        />

        {rightIcon ? <View style={styles.rightIcon}>{rightIcon}</View> : null}
      </View>

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : helperText ? (
        <Text style={styles.helperText}>{helperText}</Text>
      ) : null}
    </View>
  );
};

export default AppInput;
