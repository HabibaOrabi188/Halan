// src/shared/components/LoadingIndicator/LoadingIndicator.tsx
import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import { LoadingIndicatorProps } from '../../types';
import { styles } from './LoadingIndicator.styles';
import { colors } from '../../../theme';

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = 'large',
  color = colors.primary,
  text,
  fullScreen = false,
  overlay = false,
  style,
}) => {
  const content = (
    <>
      <ActivityIndicator size={size} color={color} />
      {text ? <Text style={styles.text}>{text}</Text> : null}
    </>
  );

  if (overlay) {
    return (
      <View style={styles.overlay}>
        <View style={styles.overlayBox}>{content}</View>
      </View>
    );
  }

  if (fullScreen) {
    return <View style={[styles.fullScreen, style]}>{content}</View>;
  }

  return <View style={[styles.container, style]}>{content}</View>;
};

export default LoadingIndicator;
