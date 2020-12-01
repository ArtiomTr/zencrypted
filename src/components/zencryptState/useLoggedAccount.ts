import { Account } from 'logic/schemas/Account';

import { useZencryptState } from './ZencryptStateContext';

export const useLoggedAccount = (): Account | undefined => {
    const { loggedAccount } = useZencryptState();

    return loggedAccount;
};
