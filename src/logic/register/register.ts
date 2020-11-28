import { Account } from 'logic/schemas/Account';
import { RealmModelControl } from 'utils/realm/realmModelControl';

import { hashConfig } from './constants';
import { hashPassword } from './hashPassword';

export const register = async (
    control: RealmModelControl<Account>,
    name: string,
    password: string,
): Promise<void> => {
    const { hash, salt } = hashPassword(password, hashConfig);
    control.create({
        passwordHash: hash,
        salt,
        name,
    });
    return Promise.resolve();
};
