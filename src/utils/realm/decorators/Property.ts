import 'reflect-metadata';

import { PropertyType } from 'realm';

import { realmTypeFromConstructor } from './realmTypeFromConstructor';
import { registerProperty } from './registerProperty';

export type PropertyConfig = {
    type?: PropertyType | Function;
    optional?: boolean;
};

export const Property = (config?: PropertyConfig) => {
    return (target: object, key: string) => {
        const targetConstructor = target.constructor;

        const rawType = Reflect.getMetadata('design:type', target, key);

        const realmType = realmTypeFromConstructor(rawType, key, targetConstructor.name, config);

        registerProperty(targetConstructor, key, realmType);
    };
};
