import {Get, Controller, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {GeneralGuard} from "./general.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(GeneralGuard)
  root(): string {
    return this.appService.root();
  }
}
