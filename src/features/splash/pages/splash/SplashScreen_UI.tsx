import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Animated,
  ActivityIndicator,
} from 'react-native';

import styles from './SplashScreen.styles';
import { SplashScreenProps } from './SplashScreen.types';
import { colors } from '../../../../theme';
import { images } from '../../../../core';

const SplashScreenUI: React.FC<SplashScreenProps> = ({
  logoScale,
  logoOpacity,
  contentOpacity,
  contentTranslateY,
  indicatorOpacity,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={images.bg}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <View style={styles.contentWrapper}>
          <Animated.View
            style={[
              styles.logoContainer,
              {
                opacity: logoOpacity,
                transform: [{ scale: logoScale }],
              },
            ]}
          >
            <Animated.Image
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </Animated.View>

          <Animated.View
            style={[
              styles.textContainer,
              {
                opacity: contentOpacity,
                transform: [{ translateY: contentTranslateY }],
              },
            ]}
          >
            <Text style={styles.brandTitle}>حـالاً</Text>
          </Animated.View>

        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreenUI;
