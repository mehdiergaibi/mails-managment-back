import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TypeService } from './type.service';
import { AddTypeDTO } from './dto/add-type.dto';
@Controller('type')
export class TypeController {
  constructor(private typeService: TypeService) {}

  @Get()
  getAllMails() {
    return this.typeService.getAllTypes();
  }
  @Post('/add-type')
  async addMail(@Body() addMailDTO: AddTypeDTO) {
    const type = await this.typeService.addType(addMailDTO);
    return type;
  }
  @Delete('/delete-type/:id')
  async deleteMail(@Param('id') id: string) {
    const deletedMail = await this.typeService.deleteType(id);
    if (!deletedMail) throw new HttpException('mail not found', 404);
    return deletedMail;
  }
  @Patch('/update-type/:id')
  async updateCheck(
    @Param('id') id: string,
    @Body() updatedTypeDTO: AddTypeDTO,
  ) {
    const updatedMail = await this.typeService.updateType(id, updatedTypeDTO);
    if (!updatedMail) throw new HttpException('mail not found', 404);
    return updatedMail;
  }
}
