// src/shared/layouts/ScreenLayout.tsx
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../../theme';
import { ScreenLayoutProps } from '../types';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { AppButton } from '../components/AppButton';

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  header,
  footer,
  scrollable = false,
  loading = false,
  error = null,
  onRetry,
  backgroundColor = colors.background,
  contentContainerStyle,
  style,
  edges = ['top', 'bottom', 'left', 'right'],
}) => {
  const content = (
    <>
      {error ? (
        <View style={styles.errorBanner}>
          <Text style={styles.errorText}>{error}</Text>
          {onRetry ? (
            <AppButton
              title="إعادة المحاولة"
              variant="outline"
              size="sm"
              onPress={onRetry}
              style={styles.retryButton}
            />
          ) : null}
        </View>
      ) : null}

      {scrollable ? (
        <ScrollView
          style={styles.flex}
          contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.flex, contentContainerStyle]}>{children}</View>
      )}
    </>
  );

  return (
    <SafeAreaView
      edges={edges}
      style={[styles.container, { backgroundColor }, style]}>
      {header || null}

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {content}
      </KeyboardAvoidingView>

      {footer || null}

      {loading ? <LoadingIndicator overlay text="جارٍ التحميل..." /> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: spacing.lg,
  },
  errorBanner: {
    backgroundColor: colors.paleGreen,
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
    padding: spacing.md,
    margin: spacing.md,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  errorText: {
    flex: 1,
    fontFamily: typography.fontFamily,
    fontSize: typography.body2.fontSize,
    color: colors.error,
    textAlign: 'right',
  },
  retryButton: {
    marginLeft: spacing.md,
  },
});

export default ScreenLayout;
