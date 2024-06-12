import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CourierDepSchema {
  @Prop({ required: [true, 'numero est obligatoire'] }) 
  numero: number;

  @Prop({ required: [true, 'date de depart est obligatoire'] })
  dateDepp: string;

  @Prop({ required: [true, 'destinataire est obligatoire'] })
  destinataire: string;

  @Prop({ required: [true, 'objet est obligatoire'] })
  objet: string;

  @Prop({ required: [true, 'type est obligatoire'] })
  type: string;

  @Prop({ required: [true, 'division est obligatoire'] })
  division: string;

  @Prop({ required: [true, 'recu par est obligatoire'] })
  recuPar: string;

  @Prop()
  observation: string;
}
export const DepSchema = SchemaFactory.createForClass(CourierDepSchema); 
