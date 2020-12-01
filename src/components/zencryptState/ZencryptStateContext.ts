import { createContext, useContext } from 'react';
import { Account } from 'logic/schemas/Account';

export type ZencryptState = {
    loggedAccount?: Account;
    setLoggedAccount: (account: Account) => void;
};

export const ZencryptStateContext = createContext<undefined | ZencryptState>(undefined);

export const useZencryptState = () => {
    const context = useContext(ZencryptStateContext);

    if (context === undefined) {
        throw new Error('Trying to access ZencryptState outside ZencryptStateContext.');
    }

    return context;
};
