import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs/index";
export declare class GeneralGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
