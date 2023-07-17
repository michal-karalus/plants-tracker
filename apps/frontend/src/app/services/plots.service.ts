import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  shareReplay,
  switchMap,
} from 'rxjs';
import { Plot } from '@prisma/client';

import { environment } from '@/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlotsService {
  private readonly refetchPlots$ = new BehaviorSubject(true);

  readonly plots$ = combineLatest([this.refetchPlots$]).pipe(
    switchMap(() => {
      return this.getPlots();
    })
  );

  constructor(private httpClient: HttpClient) {}

  getPlots(): Observable<Plot[]> {
    return this.httpClient
      .get<Plot[]>(`${environment.API_URL}/plots`)
      .pipe(shareReplay(1));
  }

  addPlot(name: string): Observable<Plot> {
    return this.httpClient.post<Plot>(`${environment.API_URL}/plots`, {
      name,
    });
  }

  deletePlot(id: number) {
    return this.httpClient.delete(`${environment.API_URL}/plots/${id}`);
  }

  getPlot(id: number): Observable<Plot> {
    return this.httpClient.get<Plot>(`${environment.API_URL}/plots/${id}`);
  }

  editPlot(id: number, name: string): Observable<Plot> {
    return this.httpClient.put<Plot>(`${environment.API_URL}/plots/${id}`, {
      name,
    });
  }

  refetchPlots(): void {
    this.refetchPlots$.next(true);
  }
}
