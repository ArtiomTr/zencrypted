import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Background } from 'components/material/Background';
import { renderTabBar } from 'components/slides/TabBar';
import { SCREEN_KEY_TEST, Test } from './Test';
import { SCREEN_KEY_WELCOME, Welcome } from './Welcome';

const Tab = createBottomTabNavigator();

export const SCREEN_KEY_SLIDES = 'slides';

export const Slides = () => (
    <Background style={styles.background}>
        <SafeAreaView style={styles.background}>
            <Tab.Navigator sceneContainerStyle={styles.sceneContainer} tabBar={renderTabBar}>
                <Tab.Screen name={SCREEN_KEY_TEST} component={Test} />
                <Tab.Screen name={SCREEN_KEY_WELCOME} component={Welcome} />
                <Tab.Screen name={'a1'} component={Welcome} />
                <Tab.Screen name={'a2'} component={Welcome} />
            </Tab.Navigator>
        </SafeAreaView>
    </Background>
);

const styles = StyleSheet.create({
    background: {
        height: '100%',
    },
    sceneContainer: {
        backgroundColor: 'transparent',
    },
});
