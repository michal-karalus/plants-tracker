import { Route } from '@angular/router';

import { PlotsComponent } from './plots/plots.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: '', component: PlotsComponent },
  { path: 'plot/:plotId', component: HomeComponent },
];
