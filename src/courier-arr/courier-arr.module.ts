import { Module } from '@nestjs/common';
import { CourierArrController } from './courier-arr.controller';
import { CourierArrService } from './courier-arr.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArrSchema } from 'src/schemas/CourierArr.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'courier_arrive',
        schema: ArrSchema,
      },
    ]),
  ],
  controllers: [CourierArrController],
  providers: [CourierArrService],
})
export class CourierArrModule {}
