import { Module } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { CategoriesController } from './controllers/categories.controller';
import { PrimsaService } from '../primsa.service';

@Module({
  providers: [CategoriesService, PrimsaService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
