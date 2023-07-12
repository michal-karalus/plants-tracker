import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Plot } from '@prisma/client';

import { environment } from '@/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PlotsService {
  constructor(private httpClient: HttpClient) {}

  getPlots(): Observable<Plot[]> {
    return this.httpClient
      .get<Plot[]>(`${environment.API_URL}/plots`)
      .pipe(shareReplay(1));
  }

  addPlot(name: string) {
    return this.httpClient.post(`${environment.API_URL}/plots`, {
      name,
    });
  }

  deletePlot(id: number) {
    return this.httpClient.delete(`${environment.API_URL}/plots/${id}`);
  }
}
