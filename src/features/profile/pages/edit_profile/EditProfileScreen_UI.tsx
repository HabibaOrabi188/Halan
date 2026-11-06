import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './EditProfileScreen.styles';
import { EditProfileScreenProps } from './EditProfileScreen.types';
import { colors } from '../../../../theme';

const EditProfileScreenUI: React.FC<EditProfileScreenProps> = () => {
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

export default EditProfileScreenUI;
