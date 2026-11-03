import React from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialDesignIcons as Icon } from '@react-native-vector-icons/material-design-icons';

import { colors, radii, scale, spacing, typography } from '../../theme';
import { AppButton, CustomText } from '../components';

export interface LocationDialogProps {
  visible: boolean;
  isLoading?: boolean;
  onConfirm: () => void;
  onDismiss: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  dismissText?: string;
}

export const LocationDialog: React.FC<LocationDialogProps> = ({
  visible,
  isLoading = false,
  onConfirm,
  onDismiss,
  title = 'حدد موقعك',
  description = 'قم بتشغيل الـ GPS لتحديد موقعك الحالي واكتشاف الخدمات القريبة منك.',
  confirmText = 'تحديد موقعي الآن',
  dismissText = 'ليس الآن',
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onDismiss}>
      <TouchableWithoutFeedback onPress={onDismiss}>
        <View style={dialogStyles.overlay}>
          <TouchableWithoutFeedback>
            <View style={dialogStyles.dialog}>
              {/* Icon */}
              <View style={dialogStyles.iconWrapper}>
                <Icon
                  name="map-marker-radius-outline"
                  size={scale(40)}
                  color={colors.primary}
                />
              </View>

              {/* Title */}
              <CustomText
                title={title}
                size={typography.h3}
                weight={typography.fontWeightBold}
                align="center"
                containerStyle={{ marginBottom: spacing.xs }}
              />
              <CustomText
                title={description}
                color={colors.textSecondary}
                size={typography.body2}
                align="center"
                containerStyle={{ marginBottom: spacing.xl }}
              />

              {/* Action Buttons */}
              <AppButton
                title={isLoading ? 'جاري تحديد الموقع...' : confirmText}
                onPress={onConfirm}
                loading={isLoading}
                disabled={isLoading}
                fullWidth
                size="sm"
                leftIcon={
                  !isLoading ? (
                    <Icon
                      name="crosshairs-gps"
                      size={scale(20)}
                      color={colors.white}
                    />
                  ) : undefined
                }
                style={{ marginBottom: spacing.sm }}
              />
              <AppButton
                title={dismissText}
                onPress={onDismiss}
                disabled={isLoading}
                fullWidth
                size="sm"
                variant="outline"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const dialogStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  dialog: {
    width: '100%',
    backgroundColor: colors.surface,
    borderRadius: radii.xxl,
    padding: spacing.xl,
    alignItems: 'center',
  },
  iconWrapper: {
    width: scale(72),
    height: scale(72),
    borderRadius: scale(36),
    backgroundColor: colors.whiteGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
});

export const locationDialog = LocationDialog;
export default LocationDialog;
