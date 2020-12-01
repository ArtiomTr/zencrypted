import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Menu, TextInput, TouchableRipple } from 'react-native-paper';
import color from 'color';
import { useStyles } from 'utils/useStyles';

export type DropdownProps<T> = {
    items: T[];
    renderValue: (value: T) => string;
    renderItem?: (item: T) => React.ReactNode;
    renderItemIcon?: (item: T) => React.ComponentProps<typeof Menu.Item>['icon'];
    value: T;
    onValueChanged: (value: T) => void;
};

export const Dropdown = <T,>({
    items,
    renderValue,
    renderItem,
    renderItemIcon,
    onValueChanged,
    value,
}: DropdownProps<T>) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const normalRenderItem = renderItem ?? renderValue;

    const styles = useStyles(buildStyles);

    return (
        <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
                <TouchableRipple onPress={() => setMenuVisible(true)}>
                    <TextInput
                        editable={false}
                        dense
                        style={styles.input}
                        value={renderValue(value)}
                        right={<TextInput.Icon disabled centered name="chevron-down-outline" />}
                    />
                </TouchableRipple>
            }
        >
            {items.map((item, index) => (
                <Menu.Item
                    icon={renderItemIcon?.(item)}
                    title={normalRenderItem(item)}
                    style={item === value ? styles.selectedItem : undefined}
                    key={index}
                    onPress={() => {
                        onValueChanged(item);
                        setMenuVisible(false);
                    }}
                />
            ))}
        </Menu>
    );
};

const buildStyles = (theme: ReactNativePaper.Theme) =>
    StyleSheet.create({
        input: {
            backgroundColor: 'transparent',
        },
        selectedItem: {
            backgroundColor: color(theme.colors.surface).lighten(1.5).hex(),
        },
    });
