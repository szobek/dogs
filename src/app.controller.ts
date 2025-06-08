import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDogDto } from './dtos/createDog.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(public appService: AppService) {
    console.log('AppController initialized');
  }
  @Get()
  main() {
    return this.appService.findAll();
  }

  @Post()
  createDog(@Body() body: CreateDogDto) {
  return this.appService.create(body);    
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.appService.findById(id);
  }
}
