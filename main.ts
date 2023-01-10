import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const PORT = 8000;

app.use((ctx) => {
  ctx.response.body = "Hello OAK!";
  console.log(`${ctx.request.method} ${ctx.request.url}`);
});

console.log(`Listening in Port: ${PORT}`);
await app.listen({ port: PORT});

