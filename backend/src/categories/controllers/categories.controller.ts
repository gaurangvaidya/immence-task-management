import { BadRequestException, Controller, Get } from '@nestjs/common';
import { GetCategoriesResponse } from '../types';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Get()
  async getAllCategories(): GetCategoriesResponse {
    return this.categoriesService.getCategories();
  }
}
