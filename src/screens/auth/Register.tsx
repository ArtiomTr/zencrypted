import React from 'react';
import { View } from 'react-native';
import Morfix from 'morfix';

import { PasswordField } from 'components/fields/PasswordField';
import { StringField } from 'components/fields/StringField';
import { Typography } from 'components/material/Typography';
import { WhiteSubmitButton } from 'components/material/WhiteSubmitButton';
import { authSharedStyles as styles } from './Auth';

export const SCREEN_KEY_REGISTER = 'register';

export const Register = () => {
    return (
        <View>
            <View style={styles.headingContainer}>
                <Typography variant="h1">Hello!</Typography>
                <Typography variant="h2">Let's get acquainted.</Typography>
            </View>
            <Morfix
                initialValues={{
                    name: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={() => {
                    return Promise.resolve();
                }}
            >
                <View>
                    <StringField
                        required
                        style={styles.field}
                        name="name"
                        label="What's your name?"
                    />
                    <PasswordField
                        required
                        style={styles.field}
                        name="password"
                        label="Pick a password"
                    />
                    <PasswordField
                        style={styles.field}
                        name="confirmPassword"
                        label="Re-enter password"
                        required
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <WhiteSubmitButton iconReverse icon="arrow-forward-outline">
                        Next
                    </WhiteSubmitButton>
                </View>
            </Morfix>
        </View>
    );
};
