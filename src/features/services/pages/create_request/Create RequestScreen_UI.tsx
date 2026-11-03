import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Create RequestScreen.styles';
import { Create RequestScreenProps } from './Create RequestScreen.types';
import { colors } from '../../../../theme';

const Create RequestScreenUI: React.FC<Create RequestScreenProps> = () => {
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
        <Text>Create Request Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Create RequestScreenUI;
