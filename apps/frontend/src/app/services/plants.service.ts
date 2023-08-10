import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  of,
  switchMap,
  take,
} from 'rxjs';
import { Plant } from '@prisma/client';

import { environment } from '@/environments/environment';
import { RouteDataService } from './route-data.service';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private plantSize = 20;
  private readonly plotId$ = this.routeData.activeRoutePlotId$;
  private readonly refetchPlants$ = new BehaviorSubject(true);

  plants$ = combineLatest([this.plotId$, this.refetchPlants$]).pipe(
    switchMap(([plotId]) => {
      if (!plotId) return of();

      return this.getPlants(plotId);
    })
  );

  constructor(
    private httpClient: HttpClient,
    private routeData: RouteDataService
  ) {}

  getPlants(plotId: string): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(
      `${environment.API_URL}/${plotId}/plants`
    );
  }

  addPlant(
    x: number,
    y: number,
    plotId$: Observable<string>
  ): Observable<Plant> {
    return plotId$.pipe(
      take(1),
      switchMap((plotId) => {
        return this.httpClient.post<Plant>(
          `${environment.API_URL}/${plotId}/plants`,
          {
            positionX: x - this.plantSize,
            positionY: y - this.plantSize,
          }
        );
      })
    );
  }

  refetch(): void {
    this.refetchPlants$.next(true);
  }
}
