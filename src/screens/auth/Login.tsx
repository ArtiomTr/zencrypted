import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthBase } from './AuthBase';

export const SCREEN_KEY_LOGIN = 'login';

export const Login = () => (
    <AuthBase>
        <Text>Hello</Text>
    </AuthBase>
);
