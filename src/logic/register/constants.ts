import { HashConfig } from './hashPassword';

export const hashConfig: HashConfig = {
    saltLength: 32,
};

export const STORAGE_KEY_SALT = 'salt';
export const STORAGE_KEY_HASH = 'password';
