import { CommonResponse } from '../common/types';

export interface Category {
  id: number;
  name: string;
  created: string;
}
export type GetCategoryResponseModel = CommonResponse<Category[]>;
