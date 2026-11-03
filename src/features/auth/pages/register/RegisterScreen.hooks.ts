import { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RegisterScreenProps } from './RegisterScreen.types';
import { RootStackParamList, AuthStackParamList } from '../../../../app/navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type AuthNavProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

const useRegisterScreen = (): RegisterScreenProps => {
  const navigation = useNavigation<NavigationProp>();
  const authNavigation = useNavigation<AuthNavProp>();
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onRegister = useCallback(() => {
    if (!name.trim()) {
      setError('من فضلك أدخل الاسم بالكامل');
      return;
    }
    if (!phone.trim()) {
      setError('من فضلك أدخل رقم الموبايل');
      return;
    }
    if (!password.trim()) {
      setError('من فضلك أدخل كلمة المرور');
      return;
    }
    if (password !== confirmPassword) {
      setError('كلمة المرور وتأكيد كلمة المرور غير متطابقين');
      return;
    }
    setError(undefined);
    setLoading(true);
    // Register flow logic — navigate to Main on success
    console.log('Register attempt with:', phone, name);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Main', undefined);
    }, 1000);
  }, [phone, password, confirmPassword, name, navigation]);

  const onLogin = useCallback(() => {
    authNavigation.navigate('Login');
  }, [authNavigation]);

  return {
    password,
    setPassword,
    phone,
    setPhone,
    onLogin,
    onRegister,
    loading,
    error,
    name,
    setName,
    confirmPassword,
    setConfirmPassword,
  };
};

export default useRegisterScreen;
