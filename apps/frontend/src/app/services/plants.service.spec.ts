import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PlantsService } from './plants.service';

describe('PlantsService', () => {
  let service: PlantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(PlantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
