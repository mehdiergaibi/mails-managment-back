import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourierDepSchema } from 'src/schemas/CourierDep.schema';
import { AddMailDepDTO } from './dto/add-mail-dep.dto';

@Injectable()
export class CourierDepartService {
  constructor(
    @InjectModel('courier_depart') private depModel: Model<CourierDepSchema>,
  ) {}
  getAllMails() {
    return this.depModel.find();
  }
  async addMail({ ...addMailDepDTO }: AddMailDepDTO) {
    const mail = await this.depModel.findOne({
      numero: addMailDepDTO.numero,
    });
    if (mail) {
      throw new HttpException(
        'numero de courier deja existe',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const newMail = new this.depModel(addMailDepDTO);
    const savedMail = await newMail.save();
    return savedMail;
  }
  deleteMail(numero: string) {
    return this.depModel.findByIdAndDelete(numero);
  }
  updateMail(id: string,{ ...updateMailDepDTO }: AddMailDepDTO) {
    return this.depModel.findByIdAndUpdate(id, updateMailDepDTO);
  }
}
