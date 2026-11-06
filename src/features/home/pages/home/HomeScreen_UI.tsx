import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialDesignIcons as Icon } from '@react-native-vector-icons/material-design-icons';

import styles from './HomeScreen.styles';
import { HomeScreenProps } from './HomeScreen.types';
import { colors, radii, scale, spacing, typography } from '../../../../theme';
import { CustomText, LocationDialog } from '../../../../shared';

const HomeScreenUI: React.FC<HomeScreenProps> = ({
  showLocationDialog,
  selectedLocation,
  isLoadingLocation,
  onConfirmLocation,
  onDismissLocation,
  onChangeLocation,
  userName,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Top Location Bar */}
      <CustomText
              title={"مرحبا "+(userName??"")}
              size={typography.body2}
              color={colors.textPrimary}

            />
      <TouchableOpacity
        onPress={onChangeLocation}
        style={styles.locationCard}
        activeOpacity={0.75}>
        <View style={styles.locationCardLeft}>
          <Icon name="map-marker-radius-outline" size={scale(22)} color={colors.primary} />
          <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <CustomText
              title="موقعك الحالي"
              size={typography.caption}
              color={colors.textMuted}
            />
            <CustomText
              title={selectedLocation ?? 'اختر موقعك'}
              weight={typography.fontWeightBold}
              color={selectedLocation ? colors.textPrimary : colors.primary}
            />
          </View>
        </View>
        <Icon name="chevron-down" size={scale(20)} color={colors.textMuted} />
      </TouchableOpacity>

      {/* Main content */}
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>

      {/* Location Dialog from shared */}
      <LocationDialog
        visible={showLocationDialog}
        isLoading={isLoadingLocation}
        onConfirm={onConfirmLocation}
        onDismiss={onDismissLocation}
      />
    </SafeAreaView>
  );
};


export default HomeScreenUI;
