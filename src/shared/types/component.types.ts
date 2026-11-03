// src/shared/types/component.types.ts
import { ReactNode } from 'react';
import { StyleProp, TextProps, TextStyle, ViewStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  fullWidth?: boolean;
}

export interface AppInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  isRTL?: boolean;
}

export interface AppHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBackPress?: () => void;
  rightElement?: ReactNode;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
}

export interface LoadingIndicatorProps {
  size?: 'small' | 'large' | number;
  color?: string;
  text?: string;
  fullScreen?: boolean;
  overlay?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface ScreenLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  scrollable?: boolean;
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
  backgroundColor?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  edges?: ('top' | 'right' | 'bottom' | 'left')[];
}

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body1'
  | 'body2'
  | 'caption';


export type TextSize =
  | number
  | { fontSize: number; lineHeight?: number }
  | 'sm'
  | 'md'
  | 'lg'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body1'
  | 'body2'
  | 'caption';

export type TextWeight =
  | 'regular'
  | 'medium'
  | 'bold'
  | TextStyle['fontWeight'];

export type TextAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'auto';

export interface CustomTextProps extends Omit<TextProps, 'style'> {
  title?: string;
  children?: ReactNode;
  variant?: TextVariant;
  color?: string;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  padding?: number;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
