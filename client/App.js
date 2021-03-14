import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../client/pages/Main';
import Settings from '../client/pages/Settings';
import SetupWelcome from '../client/pages/SetupWelcome';
import SetupPin from '../client/pages/SetupPin';
import SetupEmergency from '../client/pages/SetupEmergency';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = Font.useFonts({
    'PublicSans': require('./assets/fonts/PublicSans-Italic-VariableFont_wght.ttf'),
    'PublicSans-Italic': require('./assets/fonts/PublicSans-Italic-VariableFont_wght.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SetupWelcome" component={SetupWelcome} />
        <Stack.Screen name="SetupPin" component={SetupPin} />
        <Stack.Screen name="SetupEmergency" component={SetupEmergency} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}