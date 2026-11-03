export const images = {
  bg: require('../../../assets/images/bg.jpg'),
  logo: require('../../../assets/images/logo.png'),
  logoJpeg: require('../../../assets/logo/logo.jpeg'),
  onboarding1: require('../../../assets/images/onboarding1.jpeg'),
  onboarding2: require('../../../assets/images/onboarding2.jpeg'),
  onboarding3: require('../../../assets/images/onboarding3.jpeg'),
} as const;

export type AppImages = typeof images;
