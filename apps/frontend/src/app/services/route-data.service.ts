import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  shareReplay,
  startWith,
  switchMap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteDataService {
  readonly activeRoute$ = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    startWith(null),
    map(() => {
      let route = this.router.routerState.root;

      while (route.firstChild) {
        route = route.firstChild;
      }

      return route;
    })
  );

  readonly activeRoutePlotId$ = this.activeRoute$.pipe(
    switchMap((route) =>
      combineLatest(route.pathFromRoot.map(({ params }) => params))
    ),
    map((paths) => paths.reduce((acc, params) => ({ ...acc, ...params }), {})),
    map((params) => params['plotId']),
    distinctUntilChanged(),
    shareReplay(1)
  );

  constructor(private readonly router: Router) {}
}
