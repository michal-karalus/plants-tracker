import { Component } from '@angular/core';

import { PlantsService } from '../services/plants.service';
import { RouteDataService } from '../services/route-data.service';

@Component({
  selector: 'plants-tracker-plants',
  templateUrl: './plants.component.html',
  styleUrls: [],
})
export class PlantsComponent {
  private readonly plotId$ = this.routeData.activeRoutePlotId$;

  plants$ = this.plantsService.plants$;

  constructor(
    private plantsService: PlantsService,
    private routeData: RouteDataService
  ) {}

  addPlant(event: MouseEvent): void {
    this.plantsService.addPlant(event, this.plotId$).subscribe(() => {
      this.plantsService.refetch();
    });
  }
}
