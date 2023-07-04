import { Injectable } from '@nestjs/common';
import { PrismaClient, Plant } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  plants: Plant[] = [];

  getData() {
    return prisma.plant.findMany();
  }

  addData(data: Plant) {
    return prisma.plant.create({ data });
  }
}
