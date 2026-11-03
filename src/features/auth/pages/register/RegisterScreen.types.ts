export interface RegisterScreenProps {
  phone: string;
  password: string;
  setPhone: (value: string) => void;
  setPassword: (value: string) => void;
  onLogin?: () => void;
  onRegister?: () => void;
  loading?: boolean;
  error?: string;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  name: string;
  setName: (value: string) => void;
}
