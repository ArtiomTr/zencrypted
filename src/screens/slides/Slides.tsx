import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingTemplateTypes } from 'logic/settingTemplates/SettingTemplateTypes';
import Morfix from 'morfix';

import { Background } from 'components/material/Background';
import { renderTabBar } from 'components/slides/TabBar';
import { Complete, SCREEN_KEY_COMPLETE } from './Complete';
import { MultipleAccounts, SCREEN_KEY_MULTIPLE_ACCOUNTS } from './MultipleAccounts';
import { SCREEN_KEY_SETTINGS_PRESET, SettingsPreset } from './SettingsPreset';
import { SCREEN_KEY_WELCOME, Welcome } from './Welcome';

const Tab = createBottomTabNavigator();

export const SCREEN_KEY_SLIDES = 'slides';

export const Slides = () => (
    <Background style={styles.background}>
        <SafeAreaView style={styles.background}>
            <Morfix
                initialValues={{
                    multipleAccounts: true,
                    settingsTemplate: SettingTemplateTypes.MEDIUM,
                }}
            >
                <Tab.Navigator sceneContainerStyle={styles.sceneContainer} tabBar={renderTabBar}>
                    <Tab.Screen name={SCREEN_KEY_WELCOME} component={Welcome} />
                    <Tab.Screen name={SCREEN_KEY_MULTIPLE_ACCOUNTS} component={MultipleAccounts} />
                    <Tab.Screen name={SCREEN_KEY_SETTINGS_PRESET} component={SettingsPreset} />
                    <Tab.Screen name={SCREEN_KEY_COMPLETE} component={Complete} />
                </Tab.Navigator>
            </Morfix>
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
