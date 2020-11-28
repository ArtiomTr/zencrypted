import { Model } from 'utils/realm/Model';
import { PrimaryKey } from 'utils/realm/PrimaryKey';
import { Property } from 'utils/realm/Property';

@Model()
export class User {
    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;

    @Property()
    passwordHash!: string;

    @Property()
    salt!: string;
}
