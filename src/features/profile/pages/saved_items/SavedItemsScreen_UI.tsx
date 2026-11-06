import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './SavedItemsScreen.styles';
import { SavedItemsScreenProps } from './SavedItemsScreen.types';
import { colors } from '../../../../theme';

const SavedItemsScreenUI: React.FC<SavedItemsScreenProps> = () => {
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
        <Text>Saved Items Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SavedItemsScreenUI;
