import { Database, SQLite3Connector } from 'https://deno.land/x/denodb/mod.ts';

import {Links} from './model/links.ts';


const connector = new SQLite3Connector({
    filepath: "./database.sqlite",
});

export const db = new Database(connector);

db.link([Links])

export default db