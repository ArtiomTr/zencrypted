import React, { useCallback, useState } from 'react';
import { TextInput } from 'react-native-paper';

import { StringField, StringFieldProps } from './StringField';

type PasswordFieldProps = StringFieldProps;

export const PasswordField = (props: PasswordFieldProps) => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = useCallback(
        () => setVisible((currentlyVisible) => !currentlyVisible),
        [],
    );

    return (
        <StringField
            secureTextEntry={!visible}
            right={
                <TextInput.Icon
                    onPress={toggleVisibility}
                    name={visible ? 'eye-off-outline' : 'eye-outline'}
                />
            }
            {...props}
        />
    );
};
