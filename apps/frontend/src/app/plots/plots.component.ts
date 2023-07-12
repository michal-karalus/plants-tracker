import { Component } from '@angular/core';

import { PlotsService } from '../services/plots.service';

@Component({
  selector: 'plants-tracker-plots',
  templateUrl: './plots.component.html',
  styleUrls: [],
})
export class PlotsComponent {
  readonly plots$ = this.plotsService.plots$;

  constructor(private plotsService: PlotsService) {}

  deletePlot(id: number) {
    this.plotsService.deletePlot(id).subscribe({
      next: () => {
        this.plotsService.refetchPlots();
      },
    });
  }
}
