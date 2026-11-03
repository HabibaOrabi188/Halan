// src/core/utils/platform.ts
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const screen = {
  width,
  height,
  isSmallDevice: width < 375,
};  
