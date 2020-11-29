import React from 'react';
import { RealmProvider } from 'react-realm-context';

import { RealmModel } from '../RealmModel';

type RealmModelProviderProps<T extends RealmModel> = {
    model: new () => T;
    children: React.ReactNode;
};

export const RealmModelProvider = <T extends RealmModel>({
    model,
    children,
}: RealmModelProviderProps<T>) => (
    <RealmProvider schema={[(model as any)._schema]}>{children}</RealmProvider>
);
