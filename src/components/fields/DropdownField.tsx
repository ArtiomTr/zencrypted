import React from 'react';
import { DefaultFieldContextProps, useDefaultFieldContext } from 'morfix';

import { Dropdown, DropdownProps } from 'components/material/Dropdown';

type DropdownFieldProps<T> = {} & DefaultFieldContextProps<T> &
    Omit<DropdownProps<T>, 'value' | 'onValueChanged'>;

export const DropdownField = <T,>({ name, schema, validator, ...other }: DropdownFieldProps<T>) => {
    const {
        value,
        control: { setValue },
    } = useDefaultFieldContext<T>({ name, schema, validator });

    return <Dropdown {...other} onValueChanged={setValue} value={value} />;
};
