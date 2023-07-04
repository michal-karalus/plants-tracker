import { Controller, Get, Post, Body } from '@nestjs/common';
import { Plant } from '@prisma/client';

import { AppService } from './app.service';

@Controller('/plants')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  addData(@Body() data: Plant) {
    return this.appService.addData(data);
  }
}
