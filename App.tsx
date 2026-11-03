/**
 * Halan App
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvider } from './src/app/providers';
import { RootNavigator } from './src/app/navigation';
import { colors } from './src/theme';

function App() {
  return (
    <AppProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
