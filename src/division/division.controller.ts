import { Controller, Get } from '@nestjs/common';
import { DivisionService } from './division.service';

@Controller('division')
export class DivisionController {
    constructor(private divisionService: DivisionService) {}

  @Get()
  getAllMails() {
    return this.divisionService.getAllTypes();
  }
}
