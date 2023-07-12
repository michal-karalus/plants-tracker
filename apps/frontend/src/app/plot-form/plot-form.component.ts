import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PlotsService } from '../services/plots.service';
import { Plot } from '@prisma/client';

@Component({
  selector: 'plants-tracker-plot-form',
  templateUrl: './plot-form.component.html',
  styleUrls: [],
})
export class PlotFormComponent implements OnInit {
  plotForm: FormGroup;
  isAddMode: boolean;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private plotsService: PlotsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.plotForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    this.isAddMode = false;
    this.id = this.route.snapshot.params['plotId'];
  }

  ngOnInit() {
    this.isAddMode = !this.id;
    if (!this.isAddMode) {
      this.plotsService
        .getPlot(this.id)
        .subscribe((plot) => this.plotForm.patchValue(plot));
    }
  }

  onSubmit() {
    if (this.plotForm.valid) {
      const name = this.plotForm.value.name;

      if (this.isAddMode) {
        this.plotsService.addPlot(name).subscribe((plot: Plot) => {
          this.router.navigate(['plot', plot.id]);
        });
      } else {
        this.plotsService.editPlot(this.id, name).subscribe(() => {
          this.router.navigate(['']);
        });
      }
    }
  }
}
