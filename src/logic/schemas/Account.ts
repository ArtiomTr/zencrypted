import { Model } from 'utils/realm/decorators/Model';
import { PrimaryKey } from 'utils/realm/decorators/PrimaryKey';
import { Property } from 'utils/realm/decorators/Property';
import { RealmModel } from 'utils/realm/RealmModel';

@Model()
export class Account extends RealmModel {
    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;

    @Property()
    passwordHash!: string;

    @Property()
    salt!: string;
}
