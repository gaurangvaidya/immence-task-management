export interface CommonResponse<T> {
  status: number;
  data: T | [];
  error: string | [];
  message: string;
}

export type OnlyMessageRespone = CommonResponse<null>;

export interface PaginateResponseModel<T> {
  records: T[];
  total: number;
}

export const PaginateLimits = [5, 10, 20];
