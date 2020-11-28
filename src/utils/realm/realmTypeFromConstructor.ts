import { PropertyType } from 'realm';

import { PropertyConfig } from './Property';

export const realmTypeFromConstructor = (
    type: Function,
    key: string,
    objectName: string,
    { type: definedType, optional }: PropertyConfig = {},
    resolveNumberAs: 'int' | 'float' | 'double' = 'float',
): string => {
    const inputType: Function | PropertyType = definedType ?? type;

    if (inputType === Array) {
        throw new Error(
            `Could not automatically infer "${key}" of model "${objectName}", because it is array. Please specify realm "type" in property configuration explicitly`,
        );
    }

    let realmType: PropertyType = '';

    if (typeof inputType === 'string') {
        realmType = inputType;
    } else if (inputType === Number) {
        realmType = resolveNumberAs;
    } else if (inputType === String) {
        realmType = 'string';
    } else if (inputType === Date) {
        realmType = 'date';
    } else if (inputType === Boolean) {
        realmType = 'bool';
    } else {
        realmType = inputType.name;
    }

    if (optional) {
        return realmType + '?';
    }

    return realmType;
};
