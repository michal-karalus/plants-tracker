import { Component } from '@angular/core';

import { PlotsService } from '../services/plots.service';

@Component({
  selector: 'plants-tracker-plots',
  templateUrl: './plots.component.html',
  styleUrls: [],
})
export class PlotsComponent {
  readonly plots$ = this.plotsService.getPlots();

  constructor(private plotsService: PlotsService) {}
}
