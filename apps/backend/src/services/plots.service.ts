import { Injectable } from '@nestjs/common';
import { PrismaClient, Plot } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PlotsService {
  getPlots() {
    return prisma.plot.findMany();
  }

  addPlot(data: Plot) {
    return prisma.plot.create({ data });
  }

  getPlot(id: number) {
    return prisma.plot.findUnique({ where: { id } });
  }

  editPlot(id: number, data: Plot) {
    return prisma.plot.update({
      where: { id },
      data,
    });
  }

  deletePlot(id: number) {
    return prisma.plot.delete({ where: { id } });
  }
}
