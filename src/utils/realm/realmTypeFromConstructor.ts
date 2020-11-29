import { PropertyConfig, RealmType } from './decorators/Property';

export const realmTypeFromConstructor = (
    type: Function,
    key: string,
    objectName: string,
    { type: definedType, optional, defaultValue }: PropertyConfig = {},
    resolveNumberAs: 'int' | 'float' | 'double' = 'float',
): RealmType => {
    if (definedType && typeof definedType !== 'function' && typeof definedType !== 'string') {
        return definedType;
    }

    const inputType: Function | RealmType = definedType ?? type;

    if (inputType === Array) {
        throw new Error(
            `Could not automatically infer "${key}" of model "${objectName}", because it is array. Please specify realm "type" in property configuration explicitly`,
        );
    }

    let realmType: RealmType = '';

    if (typeof inputType !== 'function') {
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

    realmType = optional ? `${realmType}?` : realmType;

    if (defaultValue) {
        return {
            type: realmType,
            default: defaultValue,
        };
    }

    return realmType;
};
