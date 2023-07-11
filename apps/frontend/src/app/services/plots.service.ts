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
}
