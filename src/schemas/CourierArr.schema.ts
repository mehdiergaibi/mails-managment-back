import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CourierArrSchema {
  @Prop({ required: [true, 'numero est obligatoire'] }) 
  numero: number;

  @Prop({ required: [true, 'date d arrive est obligatoire'] })
  dateArr: string;

  @Prop({ required: [true, 'emmeteur est obligatoire'] })
  emmeteur: string;

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
export const ArrSchema = SchemaFactory.createForClass(CourierArrSchema); 
