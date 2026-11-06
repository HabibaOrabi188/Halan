import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../../theme';
import { ExploreScreenProps } from './ExploreScreen.types';
import styles from './ExploreScreen.styles';

const ExploreScreenUI: React.FC<ExploreScreenProps> = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.foreground,
      }}
    >
      <StatusBar barStyle="dark-content"/>

      <View style={styles.container}>
        <Text>Explore Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreenUI;
