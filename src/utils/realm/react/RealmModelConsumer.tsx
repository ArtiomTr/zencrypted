import React from 'react';
import { IRealmContext, RealmConsumer } from 'react-realm-context';

import { RealmModel } from '../RealmModel';
import { createRealmModelControl, RealmModelControl } from '../realmModelControl';

export type RealmModelConsumerProps<T extends RealmModel> = {
    children: (context: IRealmContext & { control: RealmModelControl<T> }) => React.ReactNode;
    model: new () => T;
} & Omit<React.ComponentProps<typeof RealmConsumer>, 'children'>;

export const RealmModelConsumer = <T extends RealmModel>({
    children,
    model,
    ...other
}: RealmModelConsumerProps<T>) => (
    <RealmConsumer {...other}>
        {(context) =>
            children({ control: createRealmModelControl(context.realm, model), ...context })
        }
    </RealmConsumer>
);
