import { ObjectSchema } from 'realm';

import { RealmModel } from './RealmModel';

export type RealmModelControl<T extends RealmModel> = {
    create: (values: Partial<T>) => void;
    items: Realm.Results<T>;
};

export const createRealmModelControl = <T extends RealmModel>(
    realm: Realm,
    model: new () => T,
): RealmModelControl<T> => {
    const schema: ObjectSchema = (model as any)._schema;

    if (schema === undefined) {
        throw new Error('Could not use model control on non-model object');
    }

    return {
        create: (values: Partial<T>) => {
            realm.write(() => {
                if (
                    schema.primaryKey &&
                    schema.properties[schema.primaryKey] === 'int' &&
                    (values as Record<string, unknown>)[schema.primaryKey] === undefined
                ) {
                    (values as Record<string, unknown>)[schema.primaryKey] =
                        ((realm.objects(schema.name).max(schema.primaryKey) as number) ?? 0) + 1;
                }
                realm.create((model as any)._schema.name, values);
            });
        },
        items: realm.objects(schema.name),
    };
};
