import { DataTypes, Model} from 'https://deno.land/x/denodb@v1.2.0/mod.ts';

export class Links extends Model {
    static table = "links";
    static timestamps = true;

    static fields = {
        id: { primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
        link: DataTypes.STRING,
    };
}