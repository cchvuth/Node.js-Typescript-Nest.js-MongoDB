import { IsNotEmpty } from 'class-validator';

export class CreateLionDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  breed: string;
}
