import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@/environments/environment.development';

type Plant = {
  x: number;
  y: number;
};

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private plantSize = 20;

  constructor(private httpClient: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(`${environment.API_URL}/plants`);
  }

  addPlant(event: MouseEvent): Observable<Plant> {
    const { offsetX, offsetY } = event;
    return this.httpClient.post<Plant>(`${environment.API_URL}/plants`, {
      x: offsetX - this.plantSize,
      y: offsetY - this.plantSize,
    });
  }
}
