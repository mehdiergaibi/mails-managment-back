import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema() // tells mongoose that is a schema of the collection user
export class User {
  @Prop({ required: [true, 'Nom D utilisateur est obigatoire'] }) // tells mongoose thats a property
  username: string;

  @Prop({ required: [true, 'mot de passe est obligatoire'] })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User); // thiis retutn  the the schema
