import { Context, Status } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import {Person} from '../model/Person.ts';

export const AllPersons = async (ctx: Context) => {

    try {
        const person =  await Person.all()
        ctx.response.body = person;
        ctx.response.type = "json";
        ctx.response.status = Status.OK;
    
      } catch(_err) {
        ctx.response.body = "Something went wrong";
        ctx.response.status = Status.InternalServerError;
      }
};

export const CreatePerson = async (ctx: Context) => {
    const person = await ctx.request.body({type:"json"}).value;

    try {

        const createdPerson = await Person.create(person);
        
        ctx.response.body = createdPerson;
        ctx.response.type = "json";
        ctx.response.status = Status.Created;
  
    } catch( _err) {
        
        ctx.response.status = Status.InternalServerError;
        ctx.response.body = "Something went wrong";
    }
};

export const GetPerson = async (ctx: Context) => {
    const id = ctx.params.id

    try {
        const person = await Person.where('id', id).first()

        if (!person) {

            ctx.response.status = Status.NotFound

        } else {
            ctx.response.body = person;
            ctx.response.type = "json";
            ctx.response.status = Status.OK;

        }  
        
    } catch (_err) {

        ctx.response.body = "Something went wrong";
        ctx.response.status = Status.InternalServerError;
  
    } 
}

export const UpdatePerson = async (ctx: Context) => {
    const id = ctx.params.id
    const reqBody = await ctx.request.body().value;


    try {
        const person = await Person.where('id', id).first()

        if (!person) {
            ctx.response.status = Status.NotFound

        } else {

            await Person.where('id', id).update(reqBody)
            ctx.response.body = "Person Updated";
            ctx.response.type = "json";
            ctx.response.status = Status.OK;

        }
        
        
        } catch (_err) {
            ctx.response.body = "Something went wrong";
            ctx.response.status = Status.InternalServerError;

    }     
    
};

export const DeletePerson = async  (ctx: Context) => {
    const id = ctx.params.id

    try {
        const person = await Person.where('id', id).first()

        if (!person) {

            ctx.response.status = Status.NotFound

        } else {
            Person.delete()
            ctx.response.body = "Person deleted";
            ctx.response.type = "json";
            ctx.response.status = Status.OK;

        }
      
        
    } catch (_err) {
        ctx.response.body = "Something went wrong";
        ctx.response.status = Status.InternalServerError;
  
    }        
    
};
