import { Application,Router, send } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import {db } from "./db.ts"
//import { linkRouter } from "./router/Router.ts";
import {AllLinks, GetLink, CreateLinks, UpdatedLink, DeletedLink} from "./controllers/Controllers.ts"

const ROOT_DIR = "./file";



const app = new Application();

const router = new Router();

router.get("/links", AllLinks)
router.get("/link/:id", GetLink);
router.post("/link", CreateLinks);
router.put("/link/:id", UpdatedLink);
router.delete("/link/:id", DeletedLink);


app.use(router.routes());

app.use(async (ctx) => {
  
  await send(ctx, "/index.html", {
    root: ROOT_DIR,
  });
});

await db.sync()


//app.use(router.allowedMethods());

app.listen({ port: 8080 });