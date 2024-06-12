import { IsNotEmpty, IsString } from 'class-validator';

export class AddTypeDTO {
  @IsNotEmpty()
  @IsString()
  type: string;
}
