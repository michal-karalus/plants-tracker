import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Plant } from '@prisma/client';

import { AppService } from './app.service';

@Controller(':plotId/plants')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Param('plotId') plotId: string) {
    return this.appService.getData(Number(plotId));
  }

  @Post()
  addData(@Param('plotId') plotId: string, @Body() data: Plant) {
    data.plotId = Number(plotId);
    return this.appService.addData(data);
  }
}
