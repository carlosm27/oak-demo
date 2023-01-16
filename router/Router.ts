import {Router, Status } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import {Links} from '../model/Links.ts';

export const linkRouter = new Router();

linkRouter.get("/links", (ctx) => {
  try {
    const links = Links.all()
    ctx.response.body = links;
    ctx.response.type = "json";
    ctx.response.status = Status.OK;

  } catch( err) {
    console.log(err)
    ctx.response.status = Status.InternalServerError;
  }

});