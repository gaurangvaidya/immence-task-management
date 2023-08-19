import { CommonResponse, PaginateResponseModel } from '../common/types';

export interface TaskList {
  id: number;
  name: string;
  categoryName: string;
  created: string;
  description: string;
}
export type GetTasksListResponseModel = Promise<CommonResponse<TaskList[]>>;
