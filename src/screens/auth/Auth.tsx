import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account } from 'logic/schemas/Account';
import { RealmModelProvider } from 'utils/realm/react/RealmModelProvider';

import { renderTabBar } from 'components/auth/TabBar';
import { Background } from 'components/material/Background';
import { Login, SCREEN_KEY_LOGIN } from './Login';
import { Register, SCREEN_KEY_REGISTER } from './Register';

export const SCREEN_KEY_AUTH = 'auth';

const Tab = createBottomTabNavigator();

export const Auth = () => (
    <RealmModelProvider model={Account}>
        <Background style={authBaseStyles.background}>
            <StatusBar hidden />
            <SafeAreaView style={authBaseStyles.background}>
                <Tab.Navigator
                    sceneContainerStyle={authBaseStyles.sceneContainerStyle}
                    tabBar={renderTabBar}
                    initialRouteName={SCREEN_KEY_REGISTER}
                >
                    <Tab.Screen
                        options={{
                            title: 'Sign in',
                        }}
                        name={SCREEN_KEY_LOGIN}
                        component={Login}
                    />
                    <Tab.Screen
                        options={{
                            title: 'Register',
                        }}
                        name={SCREEN_KEY_REGISTER}
                        component={Register}
                    />
                </Tab.Navigator>
            </SafeAreaView>
        </Background>
    </RealmModelProvider>
);

const authBaseStyles = StyleSheet.create({
    background: {
        height: '100%',
    },
    sceneContainerStyle: {
        backgroundColor: 'transparent',
        padding: 10,
    },
});

export const authSharedStyles = StyleSheet.create({
    headingContainer: {
        marginVertical: 30,
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 15,
    },
});
