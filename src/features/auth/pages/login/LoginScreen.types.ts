export interface LoginScreenProps {
  phone: string;
  password: string;
  setPhone: (value: string) => void;
  setPassword: (value: string) => void;
  onLogin?: () => void;
  onForgotPassword?: () => void;
  onRegister?: () => void;
  loading?: boolean;
  error?: string;
}
