import 'reflect-metadata';

import { ObjectSchema, ObjectSchemaProperty, PropertyType } from 'realm';

import { realmTypeFromConstructor } from '../realmTypeFromConstructor';
import { registerProperty } from '../registerProperty';

export type RealmType = PropertyType | ObjectSchemaProperty | ObjectSchema;

export type PropertyConfig = {
    type?: RealmType | Function;
    optional?: boolean;
    defaultValue?: any;
};

export const Property = (config?: PropertyConfig) => {
    return (target: object, key: string) => {
        const targetConstructor = target.constructor;

        const rawType = Reflect.getMetadata('design:type', target, key);

        const realmType = realmTypeFromConstructor(rawType, key, targetConstructor.name, config);

        registerProperty(targetConstructor, key, realmType);
    };
};
