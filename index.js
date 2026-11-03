/**
 * @format
 */

import { AppRegistry, I18nManager } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Enable RTL layout across the entire app
if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
}

AppRegistry.registerComponent(appName, () => App);
