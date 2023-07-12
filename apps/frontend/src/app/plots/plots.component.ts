import { Component, OnInit } from '@angular/core';
import { Plot } from '@prisma/client';

import { PlotsService } from '../services/plots.service';

@Component({
  selector: 'plants-tracker-plots',
  templateUrl: './plots.component.html',
  styleUrls: [],
})
export class PlotsComponent implements OnInit {
  plots: Plot[];

  constructor(private plotsService: PlotsService) {
    this.plots = [];
  }

  ngOnInit() {
    this.fetchPlots();
  }

  fetchPlots() {
    this.plotsService.getPlots().subscribe((plots) => {
      this.plots = plots;
    });
  }

  deletePlot(id: number) {
    this.plotsService.deletePlot(id).subscribe(() => {
      this.fetchPlots();
    });
  }
}
