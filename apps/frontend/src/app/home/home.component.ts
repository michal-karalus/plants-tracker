import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from '@prisma/client';

import { PlantsService } from '../services/plants.service';

@Component({
  selector: 'plants-tracker-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  plants: Plant[] = [];
  plotId: string;

  constructor(
    private plantsService: PlantsService,
    private route: ActivatedRoute
  ) {
    this.plotId = this.route.snapshot.paramMap.get('plotId') ?? '';
  }

  ngOnInit() {
    this.fetchPlants();
  }

  addPlant(event: MouseEvent): void {
    this.plantsService.addPlant(event, this.plotId).subscribe(() => {
      this.fetchPlants();
    });
  }

  private fetchPlants(): void {
    this.plantsService.getPlants(this.plotId).subscribe((data) => {
      this.plants = data;
    });
  }
}
