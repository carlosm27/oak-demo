import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import {db } from "./db.ts"


const ROOT_DIR = "./file";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello World"
});



const app = new Application();

app.use(async (ctx) => {
  
  await send(ctx, "/index.html", {
    root: ROOT_DIR,
  });
});

await db.sync()

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });