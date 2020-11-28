export const PROPERTIES_METADATA_KEY = Symbol('properties');

export const registerProperty = (target: object, key: string, realmType: string) => {
    if (Reflect.hasMetadata(PROPERTIES_METADATA_KEY, target)) {
        const properties: Realm.PropertiesTypes = Reflect.getMetadata(
            PROPERTIES_METADATA_KEY,
            target,
        );
        properties[key] = realmType;
        Reflect.set(target, PROPERTIES_METADATA_KEY, properties);
    } else {
        Reflect.defineMetadata(
            PROPERTIES_METADATA_KEY,
            {
                [key]: realmType,
            },
            target,
        );
    }
};
