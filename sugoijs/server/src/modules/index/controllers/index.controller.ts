import {
    Controller,
    HttpGet,
    RequestQueryParamsSchemaPolicy,
    ComparableSchema,
    SchemaTypes
 } from "@sugoi/server";
import { IndexService } from "../services/index.service";

@Controller('/index')
export class IndexController {

    constructor(
        private indexService:IndexService
    ){
    }


    @HttpGet("/")
/*    @RequestQueryParamsSchemaPolicy(ComparableSchema.ofType({
        t:ComparableSchema.ofType(SchemaTypes.STRING).setMandatory(false)
    }))*/
    index(){
        return "index is ready!";
    }

}
