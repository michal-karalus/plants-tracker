import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '@prisma/client';

import { environment } from '@/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private plantSize = 20;
  plotId = 1;

  constructor(private httpClient: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(
      `${environment.API_URL}/${this.plotId}/plants`
    );
  }

  addPlant(event: MouseEvent): Observable<Plant> {
    const { offsetX, offsetY } = event;
    return this.httpClient.post<Plant>(
      `${environment.API_URL}/${this.plotId}/plants`,
      {
        positionX: offsetX - this.plantSize,
        positionY: offsetY - this.plantSize,
      }
    );
  }
}
