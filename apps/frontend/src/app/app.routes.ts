import { Route } from '@angular/router';

import { PlotsComponent } from './plots/plots.component';
import { PlotFormComponent } from './plot-form/plot-form.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: '', component: PlotsComponent },
  { path: 'plot/new', component: PlotFormComponent },
  { path: 'plot/:plotId/edit', component: PlotFormComponent },
  { path: 'plot/:plotId', component: HomeComponent },
];
