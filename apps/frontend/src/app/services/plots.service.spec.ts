import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PlotsService } from './plots.service';

describe('PlotsService', () => {
  let service: PlotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PlotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
