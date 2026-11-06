import { StyleSheet } from 'react-native';
import { colors, radii, scale, spacing } from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.foreground,
    padding: spacing.md,
    gap: spacing.md,
  },
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
