import { Test } from '@nestjs/testing';

import { PlantsService } from './plants.service';

describe('PlantsService', () => {
  let service: PlantsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [PlantsService],
    }).compile();

    service = app.get<PlantsService>(PlantsService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getPlants()).toEqual({ message: 'Hello API' });
    });
  });
});
