import { Injectable } from '@nestjs/common';

type Plant = {
  x: number;
  y: number;
};

@Injectable()
export class AppService {
  plants: Plant[] = [];

  getData() {
    return this.plants;
  }

  addData(data: Plant) {
    this.plants.push(data);
  }
}
