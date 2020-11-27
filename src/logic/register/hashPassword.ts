import CryptoJS from 'crypto-js';

export type HashConfig = {
    saltLength: number;
};

export const hashPassword = (
    password: string,
    { saltLength }: HashConfig,
): { hash: string; salt: string } => {
    const salt = CryptoJS.lib.WordArray.random(saltLength).toString();
    const hash = CryptoJS.SHA512(password + salt).toString();

    return {
        hash,
        salt,
    };
};
