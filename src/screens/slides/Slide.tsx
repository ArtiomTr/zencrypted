import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Typography } from 'components/material/Typography';

export type SlideProps = {
    title: string;
    heading?: React.ReactNode;
};

export const Slide: React.FC<SlideProps> = ({ title, heading, children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>{heading}</View>
            <View style={styles.infoWrapper}>
                <Typography variant="h1" style={styles.title}>
                    {title}
                </Typography>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        padding: 15,
    },
    title: {
        marginVertical: 10,
    },
    infoWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: 15,
    },
    headingContainer: {
        height: '40%',
        width: '100%',
    },
});

export const sharedStyles = StyleSheet.create({
    info: {
        textAlign: 'center',
    },
});
