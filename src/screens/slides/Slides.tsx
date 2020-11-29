import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SCREEN_KEY_TEST, Test } from './Test';
import { SCREEN_KEY_WELCOME, Welcome } from './Welcome';

const Tab = createBottomTabNavigator();

export const SCREEN_KEY_SLIDES = 'slides';

export const Slides = () => (
    <Tab.Navigator>
        <Tab.Screen name={SCREEN_KEY_TEST} component={Test} />
        <Tab.Screen name={SCREEN_KEY_WELCOME} component={Welcome} />
    </Tab.Navigator>
);
