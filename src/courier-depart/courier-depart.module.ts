import { Module } from '@nestjs/common';
import { CourierDepartController } from './courier-depart.controller';
import { CourierDepartService } from './courier-depart.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DepSchema } from 'src/schemas/CourierDep.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'courier_depart',
        schema: DepSchema,
      },
    ]),
  ],
  controllers: [CourierDepartController],
  providers: [CourierDepartService]
})
export class CourierDepartModule {}
