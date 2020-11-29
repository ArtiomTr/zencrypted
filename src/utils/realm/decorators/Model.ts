import Realm from 'realm';

import { PRIMARY_KEY_METADATA_KEY } from './PrimaryKey';
import { PROPERTIES_METADATA_KEY } from '../registerProperty';

export const Model = <T extends { new (...args: any[]): any }>(customName?: string) => {
    return (constructorFn: T) => {
        return class extends constructorFn {
            static readonly _schema: Realm.ObjectSchema = {
                name: customName ?? constructorFn.name,
                primaryKey: Reflect.getMetadata(PRIMARY_KEY_METADATA_KEY, constructorFn),
                properties: Reflect.getMetadata(PROPERTIES_METADATA_KEY, constructorFn),
            };
        };
    };
};
