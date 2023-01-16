import { Application, send } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import {db } from "./db.ts"
import { linkRouter } from "./router/Router.ts";

const ROOT_DIR = "./file";



const app = new Application();

app.use(linkRouter.routes());

app.use(async (ctx) => {
  
  await send(ctx, "/index.html", {
    root: ROOT_DIR,
  });
});

await db.sync()


//app.use(router.allowedMethods());

app.listen({ port: 8080 });