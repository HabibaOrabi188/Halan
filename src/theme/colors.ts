export const colors = {
  // Green palette
  whiteGreen: '#F1F4F1',
  paleGreen: '#D7DFD7',
  lightSage: '#BECBBE',
  softSage: '#A4B6A4',
  sage: '#8BA28B',
  mutedGreen: '#718E71',
  forestGreen: '#576C57',
  deepSage: '#495B49',
  darkForest: '#344134',
  charcoalGreen: '#202820',
  nearBlackGreen: '#0B0E0B',

  // Primary colors
  primary: '#798a79ff',
  primaryLight: '#8BA28B',
  primaryDark: '#495B49',

  // Background colors
  background: '#F1F4F1',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#202820',

  // Surface colors
  surface: '#FFFFFF',
  surfaceSecondary: '#D7DFD7',

  // Text colors
  
  textPrimary: '#202820',
  textSecondary: '#495B49',
  textMuted: '#718E71',

  // Border colors
  border: '#BECBBE',

  // Status colors
  success: '#2E7D32',
  warning: '#B7791F',
  error: '#C62828',
  info: '#2563EB',

  // Utility colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Backward compatibility alias
  foreground: '#F1F4F1',
} as const;

export type ColorTokens = typeof colors;