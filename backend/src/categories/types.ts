import { Category } from '@prisma/client';
import { CommonResponse } from '../common/types';

export type GetCategoriesResponse = Promise<CommonResponse<Category[]>>;
