import { Module } from '@nestjs/common';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { PlantsController } from '@controllers/plants.controller';
import { PlantsService } from '@services/plants.service';
import { PlotsController } from './controllers/plots.controller';
import { PlotsService } from './services/plots.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [PlantsController, PlotsController],
  providers: [PlantsService, PlotsService],
})
export class AppModule {}
