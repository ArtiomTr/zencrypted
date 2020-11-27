import AsyncStorage from '@react-native-async-storage/async-storage';

import { hashConfig, STORAGE_KEY_HASH, STORAGE_KEY_SALT } from './constants';
import { hashPassword } from './hashPassword';

export const register = async (password: string): Promise<void> => {
    const { hash, salt } = hashPassword(password, hashConfig);

    await AsyncStorage.multiSet([
        [STORAGE_KEY_SALT, salt],
        [STORAGE_KEY_HASH, hash],
    ]);
};
