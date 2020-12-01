import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { DefaultFieldContextProps, useDefaultFieldContext } from 'morfix';

import { Typography } from 'components/material/Typography';

type CheckboxFieldProps = {
    label?: string;
    style?: StyleProp<ViewStyle>;
} & DefaultFieldContextProps<boolean> &
    Omit<React.ComponentProps<typeof Checkbox>, 'status'>;

export const CheckboxField = ({
    name,
    validator,
    label,
    schema,
    style,
    ...other
}: CheckboxFieldProps) => {
    const {
        value,
        control: { setValue },
    } = useDefaultFieldContext({ name, validator, schema });

    return (
        <View style={StyleSheet.compose<ViewStyle>(styles.wrapper, style)}>
            {label && <Typography onPress={() => setValue(!value)}>{label}</Typography>}
            <Checkbox
                {...other}
                status={
                    value === true ? 'checked' : value === false ? 'unchecked' : 'indeterminate'
                }
                onPress={() => setValue(!value)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});
