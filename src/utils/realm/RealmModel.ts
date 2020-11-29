import { ObjectSchema } from 'realm';

export abstract class RealmModel {
    static _schema: ObjectSchema;
}
