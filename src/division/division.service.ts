import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DivisionSchema } from 'src/schemas/Division.schema';

@Injectable()
export class DivisionService {
    constructor(@InjectModel('divisions') private typeModel: Model<DivisionSchema>) {}
  getAllTypes() {
    return this.typeModel.find();
  }
}
