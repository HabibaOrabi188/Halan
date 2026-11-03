import React, { useState } from 'react';
import { View, Pressable, Text, TouchableOpacity } from 'react-native';
import { MaterialDesignIcons as Icon } from '@react-native-vector-icons/material-design-icons';
import { AppButton, AppInput, CustomText } from '../../../../../shared';
import styles from '../RegisterScreen.styles';
import { RegisterScreenProps } from '../RegisterScreen.types';
import { colors, scale, spacing, typography } from '../../../../../theme';

export default function RegisterForm({
  phone,
  password,
  setPhone,
  setPassword,
  onRegister,
  onLogin,
  loading = false,
  error,
  name,
  setName,
  confirmPassword,
  setConfirmPassword,
}: RegisterScreenProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.formContainer}>

      <AppInput
        label="الاسم بالكامل"
        placeholder="أدخل الاسم بالكامل"
        keyboardType="default"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      
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

      <AppInput
        label="تأكيد كلمة المرور "
        placeholder="أدخل كلمة المرور"
        secureTextEntry={!showPassword}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
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




      {/* Error Message */}
      {error ? (
        <CustomText
          title={error}
          color={colors.error}
          size={typography.body2}
          containerStyle={{ marginBottom: spacing.sm, width: '100%' }}
        />
      ) : null}

      {/* Register Button */}
      <AppButton
        title="إنشاء حساب"
        onPress={onRegister ?? (() => {})}
        loading={loading}
        fullWidth
        style={styles.submitButton}
        size="sm"
      />

      {/* Login Link */}
      {onLogin ? (
        <View style={styles.registerContainer}>
          <CustomText title="لديك حساب بالفعل ؟"/>
          <Pressable onPress={onLogin} hitSlop={8}>
            <CustomText title="تسجيل الدخول" color={colors.primary} size={typography.body2} />
            </Pressable>
        </View>
      ) : null}
    </View>
  );
}