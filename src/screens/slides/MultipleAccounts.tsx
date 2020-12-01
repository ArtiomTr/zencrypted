import React from 'react';
import { StyleSheet } from 'react-native';
import Illustration from 'assets/images/multiple_accounts.svg';

import { CheckboxField } from 'components/fields/CheckboxField';
import { Typography } from 'components/material/Typography';
import { sharedStyles, Slide } from './Slide';

export const SCREEN_KEY_MULTIPLE_ACCOUNTS = 'slides/multipleAccounts';

export const MultipleAccounts = () => (
    <Slide title="Multiple accounts" heading={<Illustration width="100%" height="100%" />}>
        <Typography style={sharedStyles.info}>
            You can save your passwords in multiple accounts on this device.
        </Typography>
        <CheckboxField
            style={style.checkbox}
            label="Use multiple accounts?"
            name="multipleAccounts"
        />
    </Slide>
);

const style = StyleSheet.create({
    checkbox: {
        marginVertical: 10,
    },
});
