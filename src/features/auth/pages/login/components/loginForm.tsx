import React, { useState } from 'react';
import { View, Pressable, Text, TouchableOpacity } from 'react-native';
import { MaterialDesignIcons as Icon } from '@react-native-vector-icons/material-design-icons';
import { AppButton, AppInput, CustomText } from '../../../../../shared';
import styles from '../LoginScreen.styles';
import { LoginScreenProps } from '../LoginScreen.types';
import { colors, scale, spacing, typography } from '../../../../../theme';

export default function LoginForm({
  phone,
  password,
  setPhone,
  setPassword,
  onLogin,
  onForgotPassword,
  onRegister,
  loading = false,
  error,
}: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.formContainer}>
     
      {/* Phone Number Input */}
      <AppInput
        label="رقم الموبايل"
        placeholder="أدخل رقم الموبايل (01xxxxxxxxx)"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={(value) => {
          // Allow typing numbers and '+' without breaking backspace
          const cleaned = value.replace(/[^\d+]/g, '');
          setPhone(cleaned);
        }}
        autoCapitalize="none"
      />

      <AppInput
        label="كلمة المرور "
        placeholder="أدخل كلمة المرور"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        rightIcon={
          <Pressable
            onPress={() => setShowPassword((prev) => !prev)}
            hitSlop={8}
            style={styles.eyeButton}>
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              size={22}
              color={colors.textMuted}
            />
          </Pressable>
        }
      />

      {/* Forgot Password */}
      {onForgotPassword ? (
        <Pressable
          onPress={onForgotPassword}
          style={styles.forgotPasswordContainer}
          hitSlop={8}>
          <Text style={styles.forgotPasswordText}>نسيت كلمة المرور؟</Text>
        </Pressable>
      ) : null}




      {/* Error Message */}
      {error ? (
        <CustomText
          title={error}
          color={colors.error}
          size={typography.body2}
          containerStyle={{ marginBottom: spacing.sm, width: '100%' }}
        />
      ) : null}

      {/* Login Button */}
      <AppButton
        title="تسجيل الدخول"
        onPress={onLogin ?? (() => {})}
        loading={loading}
        fullWidth
        style={styles.submitButton}
        size="sm"
      />

      {/* Register Link */}
      {onRegister ? (
        <View style={styles.registerContainer}>
          <CustomText title="ليس لديك حساب؟"/>
          <Pressable onPress={onRegister} hitSlop={8}>
            <CustomText title="إنشاء حساب جديد" color={colors.primary} size={typography.body1} />
            </Pressable>
        </View>
      ) : null}
    </View>
  );
}