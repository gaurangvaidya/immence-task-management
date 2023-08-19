import { Type } from 'class-transformer';
import { IsIn, IsNotEmpty } from 'class-validator';

export class SortQueryDto {
  @IsIn([1, -1, 0])
  @IsNotEmpty()
  @Type(() => Number)
  order: number;
}
