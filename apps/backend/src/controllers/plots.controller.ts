import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { PlotsService } from '@services/plots.service';
import { Plot } from '@prisma/client';

@Controller('plots')
export class PlotsController {
  constructor(private readonly plotsService: PlotsService) {}

  @Get()
  getPlots() {
    return this.plotsService.getPlots();
  }

  @Post()
  addPlot(@Body() data: Plot) {
    return this.plotsService.addPlot(data);
  }

  @Get(':id')
  getPlot(@Param('id', ParseIntPipe) id: number) {
    return this.plotsService.getPlot(id);
  }

  @Put(':id')
  editPlot(@Param('id', ParseIntPipe) id: number, @Body() data: Plot) {
    return this.plotsService.editPlot(id, data);
  }

  @Delete(':id')
  deletePlot(@Param('id', ParseIntPipe) id: number) {
    return this.plotsService.deletePlot(id);
  }
}
