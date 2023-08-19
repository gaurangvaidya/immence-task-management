import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class FindOneParamDto {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  id: number;
}
