import { Database, SQLite3Connector } from 'https://deno.land/x/denodb@v1.2.0/mod.ts';

import {Person} from './model/Person.ts';


const connector = new SQLite3Connector({
    filepath: "./database.sqlite",
});

export const db = new Database(connector);

db.link([Person])

export default db