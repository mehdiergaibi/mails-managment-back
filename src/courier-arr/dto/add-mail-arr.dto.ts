import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddMailArrDTO {
  @IsNotEmpty()
  @IsNumber()
  numero: number;

  @IsNotEmpty()
  @IsString()
  dateArr: string;

  @IsNotEmpty()
  @IsString()
  emmeteur: string;

  @IsNotEmpty()
  @IsString()
  objet: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  division: string;

  @IsNotEmpty()
  @IsString()
  recuPar: string;

  @IsString()
  observation: string;
}
