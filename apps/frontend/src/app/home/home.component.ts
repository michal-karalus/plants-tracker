import { Component } from '@angular/core';

import { PlantsService } from '../services/plants.service';

type Plant = {
  x: number;
  y: number;
};

@Component({
  selector: 'plants-tracker-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  plants: Plant[] = [];

  constructor(private plantsService: PlantsService) {}

  addPlant(event: MouseEvent): void {
    this.plantsService.addPlant(event);
    this.plants = this.plantsService.getPlants();
  }
}
