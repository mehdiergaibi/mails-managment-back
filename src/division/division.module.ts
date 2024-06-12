import { Module } from '@nestjs/common';
import { DivisionController } from './division.controller';
import { DivisionService } from './division.service';
import { MongooseModule } from '@nestjs/mongoose';
import { divisionSchema } from 'src/schemas/Division.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'divisions',
        schema: divisionSchema,
      },
    ]),
  ],
  controllers: [DivisionController],
  providers: [DivisionService],
})
export class DivisionModule {}
