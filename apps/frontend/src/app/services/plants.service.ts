import { Injectable } from '@angular/core';

type Plant = {
  x: number;
  y: number;
};

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private plants: Plant[] = [];
  private plantSize = 20;

  getPlants(): Plant[] {
    return this.plants;
  }

  addPlant(event: MouseEvent): void {
    const { offsetX, offsetY } = event;

    const plant: Plant = {
      x: offsetY - this.plantSize,
      y: offsetX - this.plantSize,
    };
    this.plants.push(plant);
  }
}
