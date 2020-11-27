import React from 'react';
import { StyleSheet, TextProps, TextStyle } from 'react-native';
import { Title } from 'react-native-paper';
import color from 'color';
import { useStyles } from 'utils/useStyles';

import { defaultFontNormalize } from '../../utils/fontNormalize';

type TypographyProps = {
    variant?: TypographyVariant;
} & TextProps;

type TypographyVariant = 'h1' | 'h2';

export const Typography: React.FC<TypographyProps> = ({
    children,
    variant = 'h1',
    style,
    ...other
}) => {
    const styles = useStyles(stylesBuilder);

    return (
        <Title {...other} style={StyleSheet.compose(styles[variant], style)}>
            {children}
        </Title>
    );
};

const H1_FONT_SIZE = 40;
const H2_FONT_SIZE = 30;

const fontSizeNormalizer = (fontSize: number) => {
    const normalizedFontSize = defaultFontNormalize(fontSize);
    return { fontSize: normalizedFontSize, lineHeight: normalizedFontSize * 1.1 };
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
    });
