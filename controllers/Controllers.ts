import { Context, Status } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import {Links} from '../model/Links.ts';

export const AllLinks = async (ctx: Context) => {
    try {
        const links =  await Links.all()
        ctx.response.body = links;
        ctx.response.type = "json";
        ctx.response.status = Status.OK;
    
      } catch(_err) {
      
        ctx.response.status = Status.InternalServerError;
      }
};

export const CreateLinks = async (ctx: Context) => {
    const link = await ctx.request.body({type:"json"}).value;

    const createdLink = await Links.create(link);
    
  
    try {
  
      ctx.response.body = createdLink;
      ctx.response.type = "json";
      ctx.response.status = Status.Created;
  
    }catch( err) {
      console.log(err)
      ctx.response.status = Status.InternalServerError;
    }
};

export const GetLink = async (ctx: Context) => {
    const id = ctx.params.id

    try {
        const link = await Links.where('id', id).first()
        if (!link) {
        ctx.response.status = Status.NotFound
        }
      ctx.response.body = link;
      ctx.response.type = "json";
      ctx.response.status = Status.OK;
        
    } catch (_err) {
  
      ctx.response.status = Status.InternalServerError;
  
    } 
}

export const UpdatedLink = async (ctx: Context) => {
    const id = ctx.params.id
  const reqBody = await ctx.request.body().value;


  try {
      const link = await Links.where('id', id).first()

      if (!link) {
      ctx.response.status = Status.NotFound
      }
      await Links.where('id', id).update(reqBody)
      ctx.response.body = "Link Updated";
      ctx.response.type = "json";
      ctx.response.status = Status.OK;
      
  } catch (_err) {

    ctx.response.status = Status.InternalServerError;

  }     
    
}

export const DeletedLink = async  (ctx: Context) => {
    const id = ctx.params.id

    try {
        const link = await Links.where('id', id).first()
        if (!link) {
        ctx.response.status = Status.NotFound
        }
      link.delete()
      ctx.response.body = "Link deleted";
      ctx.response.type = "json";
      ctx.response.status = Status.OK;
        
    } catch (_err) {
  
      ctx.response.status = Status.InternalServerError;
  
    }        
    
};
