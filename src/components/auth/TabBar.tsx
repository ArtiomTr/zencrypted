import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomTabDescriptor } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import { WhiteButton } from 'components/material/WhiteButton';

type TabBarProps = BottomTabBarProps<BottomTabBarOptions>;

type TabProps = {
    route: TabBarProps['state']['routes'][number];
    descriptor: BottomTabDescriptor;
};

const Tab = ({ route, descriptor }: TabProps) => {
    const selected = descriptor.navigation.isFocused();

    return (
        <WhiteButton
            active={selected}
            key={route.key}
            onPress={() => descriptor.navigation.navigate(route.name)}
        >
            {descriptor.options.title ?? route.name}
        </WhiteButton>
    );
};

export const TabBar = ({ state, descriptors }: TabBarProps) => (
    <View style={styles.barWrapper}>
        <View style={styles.tabWrapper}>
            {state.routes.map((route) => (
                <Tab route={route} key={route.key} descriptor={descriptors[route.key]} />
            ))}
        </View>
    </View>
);

export const renderTabBar = (props: TabBarProps) => <TabBar {...props} />;

const styles = StyleSheet.create({
    barWrapper: {
        paddingVertical: 30,
        paddingHorizontal: 10,
        display: 'flex',
        alignItems: 'center',
    },
    tabWrapper: {
        backgroundColor: '#3b3a42',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 13,
    },
});
