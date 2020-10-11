import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateLionDto } from './dto/create-lion.dto';
import { LionService } from './lion.service';

@Controller('lion')
export class LionController {
  constructor(private lionSv: LionService) { }

  @Post()
  createLion(@Body() body: CreateLionDto) {
    return this.lionSv.create(body);
  }

  @Get()
  getAllLions() {
    return this.lionSv.findAll();
  }
}
