import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '@prisma/client';

import { environment } from '@/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private plantSize = 20;

  constructor(private httpClient: HttpClient) {}

  getPlants(plotId: string): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(
      `${environment.API_URL}/${plotId}/plants`
    );
  }

  addPlant(event: MouseEvent, plotId: string): Observable<Plant> {
    const { offsetX, offsetY } = event;
    return this.httpClient.post<Plant>(
      `${environment.API_URL}/${plotId}/plants`,
      {
        positionX: offsetX - this.plantSize,
        positionY: offsetY - this.plantSize,
      }
    );
  }
}
