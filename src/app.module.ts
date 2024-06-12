import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CourierDepartModule } from './courier-depart/courier-depart.module';
import { CourierArrModule } from './courier-arr/courier-arr.module';
import { TypeModule } from './type/type.module';
import { DivisionModule } from './division/division.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://checkwise12:BbvePaTw1bpzmSkz@cluster0.ej6gduv.mongodb.net/mails_manage',
    ),
    UserModule,
    CourierDepartModule,
    CourierArrModule,
    TypeModule,
    DivisionModule,
  ],
})
export class AppModule {}
