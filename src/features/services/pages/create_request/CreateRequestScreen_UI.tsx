import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './CreateRequestScreen.styles';
import { CreateRequestScreenProps } from './CreateRequestScreen.types';
import { colors } from '../../../../theme';

const CreateRequestScreenUI: React.FC<CreateRequestScreenProps> = () => {
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

export default CreateRequestScreenUI;
