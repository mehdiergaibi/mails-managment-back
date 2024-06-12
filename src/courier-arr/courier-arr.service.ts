import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourierArrSchema } from 'src/schemas/CourierArr.schema';
import { AddMailArrDTO } from './dto/add-mail-arr.dto';
@Injectable()
export class CourierArrService {
  constructor(
    @InjectModel('courier_arrive') private arrModel: Model<CourierArrSchema>,
  ) {}
  getAllMails() {
    return this.arrModel.find();
  }
  async addMail({ ...addMailArrDTO }: AddMailArrDTO) {
    const mail = await this.arrModel.findOne({
      numero: addMailArrDTO.numero,
    });
    if (mail) {
      throw new HttpException(
        'numero de courier deja existe',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const newMail = new this.arrModel(addMailArrDTO);
    const savedMail = await newMail.save();
    return savedMail;
  }
  deleteMail(numero: string) {
    return this.arrModel.findByIdAndDelete(numero);
  }
  updateMail(id: string, { ...updateMailArrDTO }: AddMailArrDTO) {
    return this.arrModel.findByIdAndUpdate(id, updateMailArrDTO);
  }
}
