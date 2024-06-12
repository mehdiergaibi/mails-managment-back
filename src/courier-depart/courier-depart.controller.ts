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
import { CourierDepartService } from './courier-depart.service';
import { AddMailDepDTO } from './dto/add-mail-dep.dto';

@Controller('courier-depart')
export class CourierDepartController {
  constructor(private depService: CourierDepartService) {}

  @Get()
  getAllMails() {
    return this.depService.getAllMails();
  }
  @Post('/add-mail-dep')
  async addMail(@Body() addMailDTO: AddMailDepDTO) {
    const mail = await this.depService.addMail(addMailDTO);
    return mail;
  }
  @Delete('/delete-mail/:id')
  async deleteMail(@Param('id') id: string) {
    const deletedMail = await this.depService.deleteMail(id);
    if (!deletedMail) throw new HttpException('mail not found', 404);
    return deletedMail;
  }
  @Patch('/update-mail/:id')
  async updateCheck(
    @Param('id') id: string,
    @Body() updatedMailDTO: AddMailDepDTO,
  ) {
    const updatedMail = await this.depService.updateMail(id, updatedMailDTO);
    if (!updatedMail) throw new HttpException('mail not found', 404);
    return updatedMail;
  }
}
