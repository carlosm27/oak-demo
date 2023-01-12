import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const ROOT_DIR = "./file", ROOT_DIR_PATH = "/file";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello World"
});



const app = new Application();

app.use(async (ctx, next) => {
  if (!ctx.request.url.pathname.startsWith(ROOT_DIR_PATH)) {
    next();
    return;
  }
  const filePath = ctx.request.url.pathname.replace(ROOT_DIR_PATH, "");
  await send(ctx, filePath, {
    root: ROOT_DIR,
  });
});


app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });