import React from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AuthBase: React.FC = ({ children }) => (
    <ImageBackground style={authBaseStyles.imageBackground} source={require('assets/lowpoly.png')}>
        <StatusBar hidden />
        <SafeAreaView>{children}</SafeAreaView>
    </ImageBackground>
);

export const authBaseStyles = StyleSheet.create({
    imageBackground: {
        height: '100%',
    },
});
