/**
 * Thanks to https://stackoverflow.com/questions/33628677/react-native-responsive-font-size#answer-35074379
 */
import { PixelRatio } from 'react-native';

import { getScreenScale } from './getScreenScale';

export const fontNormalize = (scale: number, fontSize: number) => {
    const normalizedSize = fontSize * scale;

    return Math.round(PixelRatio.roundToNearestPixel(normalizedSize)) - 2;
};

export const curriedFontSize = (scale: number) => {
    return (fontSize: number) => fontNormalize(scale, fontSize);
};

export const TARGET_SCREEN_WIDTH = 360;

export const defaultFontNormalize = curriedFontSize(getScreenScale(TARGET_SCREEN_WIDTH));
