import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TypeSchema } from 'src/schemas/Type.schema';
import { AddTypeDTO } from './dto/add-type.dto';

@Injectable()
export class TypeService {
  constructor(@InjectModel('types') private typeModel: Model<TypeSchema>) {}
  getAllTypes() {
    return this.typeModel.find();
  }
  async addType({ ...addtypeDTO }: AddTypeDTO) {
    const type = await this.typeModel.findOne({
      type: addtypeDTO.type,
    });
    if (type) {
      throw new HttpException(
        'nom de type deja existe',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const newType = new this.typeModel(addtypeDTO);
    const savedType = await newType.save();
    return savedType;
  }
  deleteType(type: string) {
    return this.typeModel.findByIdAndDelete(type);
  }
  updateType(id: string, { ...updateMailArrDTO }: AddTypeDTO) {
    return this.typeModel.findByIdAndUpdate(id, updateMailArrDTO);
  }
}
