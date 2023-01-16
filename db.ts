import { Database, SQLite3Connector } from 'https://deno.land/x/denodb@v1.2.0/mod.ts';

import {Links} from './model/Links.ts';


const connector = new SQLite3Connector({
    filepath: "./database.sqlite",
});

export const db = new Database(connector);

db.link([Links])

export default db