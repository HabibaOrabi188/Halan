import { StyleSheet } from 'react-native';
import { colors, spacing, typography, scale } from '../../../../theme';

const LOGO_SIZE = Math.min(scale(240), 280);

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoalGreen,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  brandTitle: {
    ...typography.h1,
    fontWeight: typography.fontWeightBold,
    color: colors.white,
    letterSpacing: 2,
    textAlign: 'center',
  },
});
