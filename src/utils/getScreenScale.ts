import { Dimensions } from 'react-native';

export const getScreenScale = (targetScreenWidth: number): number => {
    const { width: SCREEN_WIDTH } = Dimensions.get('window');

    return SCREEN_WIDTH / targetScreenWidth;
};
