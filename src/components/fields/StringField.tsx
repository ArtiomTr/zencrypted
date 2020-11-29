import React, { useCallback } from 'react';
import { StyleSheet, TextStyle, View } from 'react-native';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { DefaultFieldContextProps, FieldValidator, useDefaultFieldContext } from 'morfix';

export type StringFieldProps = {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    displayMaxLengthHelper?: boolean;
    onlyWordCharacters?: boolean;
} & DefaultFieldContextProps<string> &
    React.ComponentProps<typeof TextInput>;

export const StringField = ({
    name,
    validator: validatorFn,
    schema,
    required,
    style,
    minLength,
    maxLength,
    displayMaxLengthHelper = false,
    onlyWordCharacters,
    ...other
}: StringFieldProps) => {
    const validator: FieldValidator<string> = useCallback(
        (value: string) => {
            if (required && value.trim().length === 0) {
                return {
                    mrfxError: 'Required',
                };
            }
            if (minLength && value.trim().length < minLength) {
                return {
                    mrfxError: `Should be longer than ${minLength}`,
                };
            }
            if (maxLength && value.trim().length > maxLength) {
                return {
                    mrfxError: `Shouldn't be longer than ${maxLength}`,
                };
            }
            if (onlyWordCharacters && !/^\w*$/.test(value)) {
                return {
                    mrfxError: 'Only characters A-z, 0-9 are accepted',
                };
            }
            return validatorFn?.(value);
        },
        [validatorFn, required, minLength, maxLength, onlyWordCharacters],
    );

    const {
        value,
        control: { setValue, setTouched },
        meta: { error, touched },
    } = useDefaultFieldContext({ name, validator, schema });

    const hasError = touched?.mrfxTouched && !!error?.mrfxError;

    return (
        <View>
            <TextInput
                dense
                {...other}
                style={StyleSheet.compose<TextStyle>(styles.field, style)}
                value={value}
                error={hasError}
                onChangeText={setValue}
                onBlur={() => setTouched({ mrfxTouched: true })}
            />
            <View style={styles.helperTextContainer}>
                <HelperText visible={hasError} type="error">
                    {error?.mrfxError}
                </HelperText>
                <HelperText visible={displayMaxLengthHelper && !!maxLength} type="info">
                    {value.trim().length}/{maxLength}
                </HelperText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    field: {
        backgroundColor: 'rgba(255,255,255,0.04)',
    },
    helperTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
