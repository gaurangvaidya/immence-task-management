import { Type } from 'class-transformer';
import { IsIn, IsNotEmpty, Min } from 'class-validator';
import { PaginateLimits } from '../types';

export class PaginateQueryDto {
  @Min(0)
  @IsNotEmpty()
  @Type(() => Number)
  skip: number;

  @IsIn(PaginateLimits)
  @IsNotEmpty()
  @Type(() => Number)
  take: number;
}
