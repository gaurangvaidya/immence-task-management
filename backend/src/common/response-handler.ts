import { CommonResponse } from './types';

export class ResponseHandler {
  static success<T>(
    data: T,
    status: number,
    message: string,
  ): CommonResponse<T> {
    return {
      data: data ?? [],
      status,
      message,
      error: [],
    };
  }

  static error(
    error: string,
    message: string,
    status: number,
  ): CommonResponse<null> {
    return {
      data: [],
      error,
      message,
      status,
    };
  }
}
