import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Edit ProfileScreen.styles';
import { Edit ProfileScreenProps } from './Edit ProfileScreen.types';
import { colors } from '../../../../theme';

const Edit ProfileScreenUI: React.FC<Edit ProfileScreenProps> = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.foreground,
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.foreground}
      />

      <View style={styles.container}>
        <Text>Edit Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Edit ProfileScreenUI;
