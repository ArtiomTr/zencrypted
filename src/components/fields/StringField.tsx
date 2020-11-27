import React, { useCallback } from 'react';
import { StyleSheet, TextStyle, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { DefaultFieldContextProps, FieldValidator, useDefaultFieldContext } from 'morfix';

export type StringFieldProps = {
    required?: boolean;
} & DefaultFieldContextProps<string> &
    React.ComponentProps<typeof TextInput>;

export const StringField = ({
    name,
    validator: validatorFn,
    schema,
    required,
    style,
    ...other
}: StringFieldProps) => {
    const validator: FieldValidator<string> = useCallback(
        (value: string) => {
            if (required && value.trim().length === 0) {
                return {
                    mrfxError: 'Required',
                };
            }
            return validatorFn?.(value);
        },
        [validatorFn, required],
    );

    const {
        value,
        control: { setValue, setTouched },
        meta: { error, touched },
    } = useDefaultFieldContext({ name, validator, schema });

    return (
        <View>
            <TextInput
                dense
                {...other}
                style={StyleSheet.compose(styles.field, style)}
                value={value}
                error={touched?.mrfxTouched && !!error?.mrfxError}
                onChangeText={setValue}
                onBlur={() => setTouched({ mrfxTouched: true })}
            />
            {error?.mrfxError && touched?.mrfxTouched && (
                <HelperText type="error">{error.mrfxError}</HelperText>
            )}
        </View>
    );
};

const styles = StyleSheet.create<{
    field: TextStyle;
}>({
    field: {
        backgroundColor: 'rgba(255,255,255,0.04)',
    },
});
