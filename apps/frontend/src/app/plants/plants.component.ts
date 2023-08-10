import { Component, OnDestroy, OnInit } from '@angular/core';
import initPanZoom, { PanZoomOptions } from 'panzoom-core';
import { PanZoomApi } from 'panzoom-core/types/types';

import { PlantsService } from '../services/plants.service';
import { RouteDataService } from '../services/route-data.service';

@Component({
  selector: 'plants-tracker-plants',
  templateUrl: './plants.component.html',
  styleUrls: [],
})
export class PlantsComponent implements OnDestroy, OnInit {
  node: HTMLDivElement;
  panzoom: PanZoomApi;

  private readonly plotId$ = this.routeData.activeRoutePlotId$;

  ngOnInit() {
    this.node = document.querySelector('[data-id=panzoom]') as HTMLDivElement;
    const panzoomOptions: PanZoomOptions = {
      boundary: true,
      zoomMin: 1,
      onContainerClick: (click) => this.addPlant(click.x, click.y),
    };
    this.panzoom = initPanZoom(this.node, panzoomOptions);
  }

  subscription = this.plantsService.plants$.subscribe((plants) => {
    const children = document.querySelectorAll('[data-id=panzoom-child]');

    if (children.length) children.forEach((element) => element.remove());

    plants.forEach((plant) => {
      const child = document.createElement('img');
      child.src = 'assets/tree.svg';
      child.setAttribute('data-id', 'panzoom-child');
      child.classList.add('w-10');
      this.node.appendChild(child);
      this.panzoom.addElement(child, {
        id: plant.id,
        x: plant.positionX,
        y: plant.positionY,
      });
    });
  });

  constructor(
    private plantsService: PlantsService,
    private routeData: RouteDataService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addPlant(x: number, y: number): void {
    this.plantsService.addPlant(x, y, this.plotId$).subscribe(() => {
      this.plantsService.refetch();
    });
  }
}
