import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';

import Icon from './Icon';

export type WhiteButtonProps = React.ComponentProps<typeof Button> & {
    active?: boolean;
    iconReverse?: boolean;
    dense?: boolean;
};

export const WhiteButton = ({
    active = true,
    children,
    contentStyle,
    style,
    iconReverse,
    icon,
    dense,
    labelStyle,
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
                    ? (props) => (
                          <Icon
                              {...props}
                              style={iconReverse && styles.iconReverse}
                              size={20}
                              name={icon}
                          />
                      )
                    : icon
            }
            labelStyle={StyleSheet.compose<TextStyle>(
                dense ? styles.denseLabel : undefined,
                labelStyle,
            )}
            contentStyle={StyleSheet.compose<ViewStyle>(
                [
                    dense ? styles.denseContent : styles.content,
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
    denseContent: {
        paddingHorizontal: 5,
        margin: 0,
    },
    iconReverse: {
        marginRight: 10,
    },
    content: {
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    denseLabel: {
        marginHorizontal: 5,
        marginVertical: 5,
        marginRight: 0,
    },
    main: {
        borderRadius: 13,
        elevation: 0,
    },
});
