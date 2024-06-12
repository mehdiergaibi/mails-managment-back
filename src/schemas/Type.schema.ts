import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TypeSchema {
  @Prop({ required: [true, 'nom de type est obligatoire'] }) 
  type: string;

  
}
export const typeSchema = SchemaFactory.createForClass(TypeSchema); 
