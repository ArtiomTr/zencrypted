import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export const useStyles = <T>(
    build: (theme: ReactNativePaper.Theme) => StyleSheet.NamedStyles<T>,
) => {
    const theme = useTheme();
    return useMemo(() => build(theme), [theme, build]);
};
