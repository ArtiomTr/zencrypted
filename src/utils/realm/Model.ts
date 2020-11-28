import Realm from 'realm';

import { PRIMARY_KEY_METADATA_KEY } from './PrimaryKey';
import { PROPERTIES_METADATA_KEY } from './registerProperty';

export const Model = <T extends { new (...args: any[]): any }>(customName?: string) => {
    return (constructorFn: T) => {
        console.log(Reflect.getMetadata(PROPERTIES_METADATA_KEY, constructorFn));
        console.log(Reflect.getMetadata(PRIMARY_KEY_METADATA_KEY, constructorFn));
        return class extends constructorFn {
            static _schema: Realm.ObjectSchema = {
                name: customName ?? constructorFn.name,
                properties: {},
            };
        };
    };
};
