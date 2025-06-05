import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateDogDto {
  @IsString()
  name: string;
  @IsInt()
  @Min(1)
  @Max(10)
  age: number;
}
