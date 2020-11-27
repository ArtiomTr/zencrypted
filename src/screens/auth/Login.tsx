import React from 'react';
import { View } from 'react-native';
import Morfix from 'morfix';

import { PasswordField } from 'components/fields/PasswordField';
import { StringField } from 'components/fields/StringField';
import { Background } from 'components/material/Background';
import { Typography } from 'components/material/Typography';
import { WhiteSubmitButton } from 'components/material/WhiteSubmitButton';
import { authSharedStyles as styles } from './Auth';

export const SCREEN_KEY_LOGIN = 'login';

export const Login = () => {
    return (
        <Background>
            <View style={styles.headingContainer}>
                <Typography variant="h1">Welcome back!</Typography>
                <Typography variant="h2">You've been missed.</Typography>
            </View>
            <Morfix
                initialValues={{
                    name: '',
                    password: '',
                }}
                onSubmit={() => {
                    return Promise.resolve();
                }}
            >
                <View>
                    <StringField style={styles.field} name="name" label="Name" />
                    <PasswordField style={styles.field} name="password" label="Password" />
                </View>
                <View style={styles.buttonContainer}>
                    <WhiteSubmitButton icon="log-in-outline">Sign in</WhiteSubmitButton>
                </View>
            </Morfix>
        </Background>
    );
};
