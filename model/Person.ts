import { DataTypes, Model} from 'https://deno.land/x/denodb@v1.2.0/mod.ts';

export class Person extends Model {
    static table = "Person";
    static timestamps = true;

    static fields = {
        id: { primaryKey: true, autoIncrement: true },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
    };
}