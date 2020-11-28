import { PropertyConfig } from './Property';
import { realmTypeFromConstructor } from './realmTypeFromConstructor';
import { registerProperty } from './registerProperty';

export const PRIMARY_KEY_METADATA_KEY = Symbol('primaryKey');

export const PrimaryKey = (config?: PropertyConfig) => {
    return (target: object, key: string) => {
        const targetConstructor = target.constructor;

        if (Reflect.hasMetadata(PRIMARY_KEY_METADATA_KEY, targetConstructor)) {
            throw new Error(
                `Model "${targetConstructor.name}" already has primary key "${Reflect.getMetadata(
                    PRIMARY_KEY_METADATA_KEY,
                    targetConstructor,
                )}". You can have only 1 primary key at once`,
            );
        }

        const rawType = Reflect.getMetadata('design:type', target, key);

        const realmType = realmTypeFromConstructor(
            rawType,
            key,
            targetConstructor.name,
            config,
            'int',
        );

        registerProperty(targetConstructor, key, realmType);

        Reflect.defineMetadata(PRIMARY_KEY_METADATA_KEY, key, targetConstructor);
    };
};
