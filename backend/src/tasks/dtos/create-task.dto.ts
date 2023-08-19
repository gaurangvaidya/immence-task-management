import { Type } from 'class-transformer';
import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTaskDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  categoryId: number;
}
