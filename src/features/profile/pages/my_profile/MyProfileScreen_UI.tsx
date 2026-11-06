import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './MyProfileScreen.styles';
import { MyProfileScreenProps } from './MyProfileScreen.types';
import { colors } from '../../../../theme';

const MyProfileScreenUI: React.FC<MyProfileScreenProps> = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.foreground,
      }}
    >
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <Text>My Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyProfileScreenUI;
