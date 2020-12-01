import React from 'react';
import { StyleSheet, View } from 'react-native';
import Illustration from 'assets/images/settings_preset.svg';
import {
    allSettingsTemplateValues,
    settingTemplateIconColors,
    settingTemplateLabels,
} from 'logic/settingTemplates/SettingTemplateTypes';

import { DropdownField } from 'components/fields/DropdownField';
import Icon from 'components/material/Icon';
import { Typography } from 'components/material/Typography';
import { sharedStyles, Slide } from './Slide';

export const SCREEN_KEY_SETTINGS_PRESET = 'slides/settings_preset';

export const SettingsPreset = () => {
    return (
        <Slide title="Default settings" heading={<Illustration width="100%" height="100%" />}>
            <Typography style={sharedStyles.info}>
                ZenCrypted has a lot of settings that are difficult to figure out at first. We have
                prepared a few templates for you that may suit you.
            </Typography>
            <View style={styles.dropdownContainer}>
                <Typography>Template:</Typography>
                <DropdownField
                    name="settingsTemplate"
                    renderItemIcon={(item) => (props) => (
                        <Icon
                            {...props}
                            color={settingTemplateIconColors[item]}
                            name="key-outline"
                        />
                    )}
                    items={allSettingsTemplateValues}
                    renderValue={(v) => settingTemplateLabels[v]}
                />
            </View>
        </Slide>
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
});
