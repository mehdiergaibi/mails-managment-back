import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { MongooseModule } from '@nestjs/mongoose';
import { typeSchema } from 'src/schemas/Type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'types',
        schema: typeSchema,
      },
    ]),
  ],
  controllers: [TypeController],
  providers: [TypeService],
})
export class TypeModule {}
