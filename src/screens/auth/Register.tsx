import React from 'react';
import { View } from 'react-native';
import { register } from 'logic/register/register';
import { Account } from 'logic/schemas/Account';
import Morfix, { MorfixErrors } from 'morfix';
import { RealmModelConsumer } from 'utils/realm/react/RealmModelConsumer';
import { RealmModelControl } from 'utils/realm/realmModelControl';

import { PasswordField } from 'components/fields/PasswordField';
import { StringField } from 'components/fields/StringField';
import { Typography } from 'components/material/Typography';
import { WhiteSubmitButton } from 'components/material/WhiteSubmitButton';
import { authSharedStyles as styles } from './Auth';

export const SCREEN_KEY_REGISTER = 'register';

type NewAccountValues = {
    name: string;
    password: string;
    confirmPassword: string;
};

const createFormValidator = (realmControl: RealmModelControl<Account>) => {
    return ({ confirmPassword, password, name }: NewAccountValues) => {
        let errors: MorfixErrors<NewAccountValues> = {};

        if (confirmPassword !== password) {
            errors.confirmPassword = {
                mrfxError: 'Passwords should match',
            };
        }

        if (realmControl.items.filtered('name = $0', name.trim()).length > 0) {
            errors.name = {
                mrfxError: 'Account with that name already exists',
            };
        }

        return errors;
    };
};

export const Register = () => (
    <RealmModelConsumer model={Account}>
        {({ control }) => (
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
                    validateForm={createFormValidator(control)}
                    onSubmit={({ name, password }) => register(control, name, password)}
                >
                    <View>
                        <StringField
                            required
                            maxLength={32}
                            displayMaxLengthHelper
                            onlyWordCharacters
                            name="name"
                            label="What's your name?"
                        />
                        <PasswordField
                            required
                            minLength={6}
                            maxLength={32}
                            name="password"
                            label="Pick a password"
                        />
                        <PasswordField
                            required
                            minLength={6}
                            maxLength={32}
                            name="confirmPassword"
                            label="Re-enter password"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <WhiteSubmitButton iconReverse icon="arrow-forward-outline">
                            Next
                        </WhiteSubmitButton>
                    </View>
                </Morfix>
            </View>
        )}
    </RealmModelConsumer>
);
