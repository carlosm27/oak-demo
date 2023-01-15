import { DataTypes, Model} from 'https://deno.land/x/denodb/mod.ts';

export class Links extends Model {
    static table = "links";
    static timestamps = true;

    static fields = {
        id: { primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
        link: DataTypes.STRING,
    };
}