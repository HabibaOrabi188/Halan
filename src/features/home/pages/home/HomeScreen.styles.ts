import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.foreground,
    padding: spacing.md,
    gap: spacing.md,
  },
});
