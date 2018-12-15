import {
    Controller,
    HttpGet,
    RequestParam,
    Authorized
 } from "@sugoi/server";
import { IndexService } from "../services/index.service";

@Controller('/index')
export class IndexController {

    constructor(
        private indexService:IndexService
    ){
    }


    @HttpGet("/")
    index(){
        return "index is ready!";
    }

}
