import { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginScreenProps } from './LoginScreen.types';
import { RootStackParamList, AuthStackParamList } from '../../../../app/navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type AuthNavProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const useLoginScreen = (): LoginScreenProps => {
  const navigation = useNavigation<NavigationProp>();
  const authNavigation = useNavigation<AuthNavProp>();
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const onLogin = useCallback(() => {
    if (!phone.trim() || !password.trim()) {
      setError('من فضلك أدخل رقم الموبايل وكلمة المرور');
      return;
    }
    setError(undefined);
    setLoading(true);
    // Login flow logic — navigate to Main on success
    console.log('Login attempt with:', phone);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Main', undefined);
    }, 1000);
  }, [phone, password, navigation]);

  const onForgotPassword = useCallback(() => {
    console.log('Forgot password pressed');
  }, []);

  const onRegister = useCallback(() => {
    authNavigation.navigate('Register');
  }, [authNavigation]);

  return {
    password,
    setPassword,
    phone,
    setPhone,
    onLogin,
    onForgotPassword,
    onRegister,
    loading,
    error,
  };
};

export default useLoginScreen;
