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
import { CourierArrService } from './courier-arr.service';
import { AddMailArrDTO } from './dto/add-mail-arr.dto';
@Controller('courier-arr')
export class CourierArrController {
  constructor(private arrService: CourierArrService) {}

  @Get()
  getAllMails() {
    return this.arrService.getAllMails();
  }
  @Post('/add-mail-arr')
  async addMail(@Body() addMailDTO: AddMailArrDTO) {
    const mail = await this.arrService.addMail(addMailDTO);
    return mail;
  }
  @Delete('/delete-mail/:id')
  async deleteMail(@Param('id') id: string) {
    const deletedMail = await this.arrService.deleteMail(id);
    if (!deletedMail) throw new HttpException('mail not found', 404);
    return deletedMail;
  }
  @Patch('/update-mail/:id')
  async updateCheck(
    @Param('id') id: string,
    @Body() updatedMailDTO: AddMailArrDTO,
  ) {
    const updatedMail = await this.arrService.updateMail(id, updatedMailDTO);
    if (!updatedMail) throw new HttpException('mail not found', 404);
    return updatedMail;
  }
}
