export interface CommonResponse<T> {
  status: number;
  data: T | [];
  error: string | [];
  message: string;
}
