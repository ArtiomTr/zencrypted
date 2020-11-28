import 'react-native-gesture-handler';
import 'reflect-metadata';

import { settings } from 'constants/settings';

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth, SCREEN_KEY_AUTH } from 'screens/auth/Auth';

import { theme } from '../constants/theme';

const Stack = createStackNavigator();

const App = () => (
    <PaperProvider theme={theme} settings={settings}>
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name={SCREEN_KEY_AUTH} component={Auth} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    </PaperProvider>
);

export default App;
