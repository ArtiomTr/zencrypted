import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useTheme } from 'react-native-paper';

export const Background: React.FC<ViewProps> = ({ children, style, ...other }) => {
    const {
        colors: { background: backgroundColor },
    } = useTheme();

    return (
        <View style={StyleSheet.compose({ backgroundColor }, style)} {...other}>
            {children}
        </View>
    );
};
