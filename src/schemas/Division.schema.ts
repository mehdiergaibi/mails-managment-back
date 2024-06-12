import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class DivisionSchema {
  @Prop({ required: [true, 'nom de division est obligatoire'] }) 
  division: string;

  
}
export const divisionSchema = SchemaFactory.createForClass(DivisionSchema); 
