import { Module } from '@nestjs/common';

import { PlantsController } from '@controllers/plants.controller';
import { PlantsService } from '@services/plants.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [PlantsController],
  providers: [PlantsService],
})
export class AppModule {}
