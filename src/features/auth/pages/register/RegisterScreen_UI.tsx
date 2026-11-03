import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import styles from './RegisterScreen.styles';
import { RegisterScreenProps } from './RegisterScreen.types';
import { colors, spacing, typography } from '../../../../theme';
import { CustomText } from '../../../../shared';
import RegisterHeader from './components/registerHeader';
import RegisterForm from './components/registerForm';
import { images } from '../../../../core';

const RegisterScreenUI: React.FC<RegisterScreenProps> = (props) => {
  return (
    <ImageBackground
      source={images.bg}
      style={styles.backgroundImage}
      resizeMode="cover">
      <StatusBar barStyle="light-content" />

      <CustomText
        title="إنشاء حساب"
        color={colors.foreground}
        size={typography.h2}
        weight={typography.fontWeightBold}
        containerStyle={{ marginTop: spacing.xxxl, paddingHorizontal: spacing.xl }}
        align="start"
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1, width: '100%' }}>
            <RegisterHeader />
            
            <RegisterForm {...props} />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegisterScreenUI;
