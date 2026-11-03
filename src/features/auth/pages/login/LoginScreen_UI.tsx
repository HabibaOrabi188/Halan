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
import styles from './LoginScreen.styles';
import { LoginScreenProps } from './LoginScreen.types';
import { colors, spacing, typography } from '../../../../theme';
import { CustomText } from '../../../../shared';
import LoginHeader from './components/loginHeader';
import LoginForm from './components/loginForm';
import { images } from '../../../../core';

const LoginScreenUI: React.FC<LoginScreenProps> = (props) => {
  return (
    <ImageBackground
      source={images.bg}
      style={styles.backgroundImage}
      resizeMode="cover">
      <StatusBar barStyle="light-content" />

      <CustomText
        title="تسجيل الدخول"
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
            <LoginHeader />
            
            <LoginForm {...props} />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreenUI;
