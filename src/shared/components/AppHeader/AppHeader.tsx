// src/shared/components/AppHeader/AppHeader.tsx
import React from 'react';
import {
  Pressable,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppHeaderProps } from '../../types';
import { styles } from './AppHeader.styles';

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  onBackPress,
  rightElement,
  style,
  titleStyle,
  backgroundColor,
}) => {
  let navigation: any;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    navigation = useNavigation();
  } catch {
    navigation = null;
  }

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else if (navigation?.canGoBack?.()) {
      navigation.goBack();
    }
  };

  return (
    <View
      style={[
        styles.container,
        backgroundColor ? { backgroundColor } : undefined,
        style,
      ]}>
      <View style={styles.leftAction}>
        {showBack ? (
          <Pressable
            hitSlop={8}
            onPress={handleBack}
            accessibilityRole="button"
            accessibilityLabel="Go back">
            <Text style={styles.backText}>‹</Text>
          </Pressable>
        ) : null}
      </View>

      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={[styles.title, titleStyle]}>
          {title}
        </Text>
        {subtitle ? (
          <Text numberOfLines={1} style={styles.subtitle}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.rightAction}>{rightElement || null}</View>
    </View>
  );
};

export default AppHeader;
