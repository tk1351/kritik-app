import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateCriticismDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsBoolean()
  is_published: boolean;
}
