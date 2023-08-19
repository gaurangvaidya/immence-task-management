import { HttpStatus, Injectable } from '@nestjs/common';
import { GetCategoriesResponse } from '../types';
import { PrimsaService } from '../../primsa.service';
import { ResponseHandler } from '../../common/response-handler';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrimsaService) {}
  async getCategories(): GetCategoriesResponse {
    const data = await this.prismaService.category.findMany();
    return ResponseHandler.success(data, HttpStatus.OK, '');
  }
}
