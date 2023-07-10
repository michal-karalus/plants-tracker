import { Test, TestingModule } from '@nestjs/testing';

import { PlantsController } from './plants.controller';
import { PlantsService } from '@services/plants.service';

describe('PlantsController', () => {
  let controller: TestingModule;

  beforeAll(async () => {
    controller = await Test.createTestingModule({
      controllers: [PlantsController],
      providers: [PlantsService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = controller.get<PlantsController>(PlantsController);
      expect(appController.getPlants()).toEqual({ message: 'Hello API' });
    });
  });
});
