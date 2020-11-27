import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';

import Icon from './Icon';

export type WhiteButtonProps = React.ComponentProps<typeof Button> & {
    active?: boolean;
    iconReverse?: boolean;
};

export const WhiteButton = ({
    active = true,
    children,
    contentStyle,
    style,
    iconReverse,
    icon,
    ...other
}: WhiteButtonProps) => {
    return (
        <Button
            mode="contained"
            color={active ? '#e4e8ee' : '#3b3a42'}
            uppercase={false}
            {...other}
            icon={
                typeof icon === 'string'
                    ? (props) => <Icon {...props} size={20} name={icon} />
                    : icon
            }
            contentStyle={StyleSheet.compose<ViewStyle>(
                [
                    styles.content,
                    {
                        flexDirection: iconReverse ? 'row-reverse' : 'row',
                    },
                ],
                contentStyle,
            )}
            style={StyleSheet.compose<ViewStyle>(styles.main, style)}
        >
            {children}
        </Button>
    );
};

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    main: {
        borderRadius: 13,
        elevation: 0,
    },
});
