import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthPayloadDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(32)
  password: string;
}
