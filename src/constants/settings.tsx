import React from 'react';
import { Settings } from 'react-native-paper/lib/typescript/src/core/settings';

import Icon from 'components/material/Icon';

export const settings: Settings = {
    icon: (props) => <Icon {...props} />,
};
