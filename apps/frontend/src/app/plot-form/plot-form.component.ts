import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PlotsService } from '../services/plots.service';
import { Router } from '@angular/router';

@Component({
  selector: 'plants-tracker-plot-form',
  templateUrl: './plot-form.component.html',
  styleUrls: [],
})
export class PlotFormComponent {
  plotForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private plotsService: PlotsService,
    private router: Router
  ) {
    this.plotForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.plotForm.valid) {
      const name = this.plotForm.value.name;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.plotsService.addPlot(name).subscribe((plot: any) => {
        this.router.navigate(['plot', plot.id]);
      });
    }
  }
}
