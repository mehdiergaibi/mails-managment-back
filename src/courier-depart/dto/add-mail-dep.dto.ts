import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddMailDepDTO {
  @IsNotEmpty()
  @IsNumber()
  numero: number;

  @IsNotEmpty()
  @IsString()
  dateDepp: string;

  @IsNotEmpty()
  @IsString()
  destinataire: string;

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

/* numero: number;
    dateDepp: string;
    destinataire: string;
    objet: string;
    type: string;
    division: string;
    recuPar: string;
    observation: string; */
