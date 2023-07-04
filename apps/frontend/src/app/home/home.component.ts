import { Component, OnInit } from '@angular/core';
import { Plant } from '@prisma/client';

import { PlantsService } from '../services/plants.service';

@Component({
  selector: 'plants-tracker-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  plants: Plant[] = [];

  constructor(private plantsService: PlantsService) {}

  ngOnInit() {
    this.fetchPlants();
  }

  addPlant(event: MouseEvent): void {
    this.plantsService.addPlant(event).subscribe(() => {
      this.fetchPlants();
    });
  }

  private fetchPlants(): void {
    this.plantsService.getPlants().subscribe((data) => {
      this.plants = data;
    });
  }
}
