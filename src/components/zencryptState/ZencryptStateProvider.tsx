import React, { useState } from 'react';
import { Account } from 'logic/schemas/Account';

import { ZencryptStateContext } from './ZencryptStateContext';

export const ZencryptStateProvider: React.FC = ({ children }) => {
    const [loggedAccount, setLoggedAccount] = useState<Account | undefined>();

    return (
        <ZencryptStateContext.Provider value={{ loggedAccount, setLoggedAccount }}>
            {children}
        </ZencryptStateContext.Provider>
    );
};
