import { Application,Router, send } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import logger from "https://deno.land/x/oak_logger/mod.ts";
import {db } from "./db.ts"
import {AllPersons, GetPerson, CreatePerson, UpdatePerson, DeletePerson} from "./controllers/Controllers.ts"

const ROOT_DIR = "./file";



const app = new Application();

const router = new Router();

router.get("/persons", AllPersons)
router.get("/person/:id", GetPerson);
router.post("/person", CreatePerson);
router.put("/person/:id", UpdatePerson);
router.delete("/person/:id", DeletePerson);

app.use(logger.logger);
app.use(router.routes());



app.use(async (ctx) => {
  
  await send(ctx, "/index.html", {
    root: ROOT_DIR,
  });
});

await db.sync()


//app.use(router.allowedMethods());

app.listen({ port: 8080 });