import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Plant } from '@prisma/client';

import { PlantsService } from '@services/plants.service';

@Controller(':plotId/plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get()
  getPlants(@Param('plotId') plotId: string) {
    return this.plantsService.getPlants(Number(plotId));
  }

  @Post()
  addPlant(@Param('plotId') plotId: string, @Body() data: Plant) {
    data.plotId = Number(plotId);
    return this.plantsService.addPlant(data);
  }
}
