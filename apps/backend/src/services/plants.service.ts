import { Injectable } from '@nestjs/common';
import { PrismaClient, Plant } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PlantsService {
  plants: Plant[] = [];

  getPlants(plotId: number) {
    return prisma.plant.findMany({
      where: { plotId },
    });
  }

  addPlant(data: Plant) {
    return prisma.plant.create({ data });
  }

  editPlant(data: Plant) {
    return prisma.plant.update({
      where: { id: data.id },
      data
    });
  }
}
