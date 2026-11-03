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
}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.foreground }}>
      <StatusBar barStyle="dark-content" />

      {/* Top Location Bar */}
      <TouchableOpacity
        onPress={onChangeLocation}
        style={uiStyles.locationCard}
        activeOpacity={0.75}>
        <View style={uiStyles.locationCardLeft}>
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

const uiStyles = StyleSheet.create({
  locationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: spacing.lg,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: scale(1),
    borderColor: colors.border,
    gap: spacing.sm,
  },
  locationCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flex: 1,
  },
});

export default HomeScreenUI;
