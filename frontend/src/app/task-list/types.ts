import { CommonResponse } from '../common/types';

export interface Task {
  id: number;
  name: string;
  description: string;
  categoryName: string;
}

export interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

export type GetTaskList = CommonResponse<Task[]>;
