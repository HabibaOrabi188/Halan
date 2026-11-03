import { scale, ScaledSheet } from 'react-native-size-matters';

import { colors } from '../../../../theme';

export default ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.foreground,
    padding: scale(10),
    gap: scale(10),
  },
});
