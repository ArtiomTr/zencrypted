import React from 'react';
import { SubmitAction, useSubmitAction } from 'morfix';

import { WhiteButton, WhiteButtonProps } from './WhiteButton';

type WhiteSubmitButtonProps<T extends object> = WhiteButtonProps & {
    onSubmit?: SubmitAction<T>;
};

export const WhiteSubmitButton = <T extends object>({
    onSubmit,
    ...other
}: WhiteSubmitButtonProps<T>) => {
    const onPress = useSubmitAction(onSubmit);

    return <WhiteButton {...other} onPress={onPress} />;
};
