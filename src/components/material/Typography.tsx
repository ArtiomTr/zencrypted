import React from 'react';
import { StyleSheet, TextProps, TextStyle } from 'react-native';
import { Text, Title } from 'react-native-paper';
import color from 'color';
import { useStyles } from 'utils/useStyles';

import { defaultFontNormalize } from '../../utils/fontNormalize';

type TypographyProps = {
    variant?: TypographyVariant;
} & TextProps;

type TypographyVariant = 'h1' | 'h2' | 'body';

export const Typography: React.FC<TypographyProps> = ({
    children,
    variant = 'body',
    style,
    ...other
}) => {
    const styles = useStyles(stylesBuilder);

    if (variant === 'body') {
        return (
            <Text {...other} style={StyleSheet.compose(styles.body, style)}>
                {children}
            </Text>
        );
    }

    return (
        <Title {...other} style={StyleSheet.compose(styles[variant], style)}>
            {children}
        </Title>
    );
};

const H1_FONT_SIZE = 40;
const H2_FONT_SIZE = 30;

const BODY_FONT_SIZE = 18;

const fontSizeNormalizer = (fontSize: number) => {
    const normalizedFontSize = defaultFontNormalize(fontSize);
    return { fontSize: normalizedFontSize, lineHeight: normalizedFontSize * 1.2 };
};

const stylesBuilder = ({ colors: { text } }: ReactNativePaper.Theme) =>
    StyleSheet.create<Record<string, TextStyle>>({
        h1: {
            ...fontSizeNormalizer(H1_FONT_SIZE),
            fontFamily: 'Poppins-Bold',
        },
        h2: {
            ...fontSizeNormalizer(H2_FONT_SIZE),
            fontFamily: 'Poppins-SemiBold',
            color: `${color(text).hex()}aa`,
        },
        body: {
            ...fontSizeNormalizer(BODY_FONT_SIZE),
            fontFamily: 'Poppins-Regular',
            color: `${color(text).hex()}cc`,
        },
    });
