import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDogDto } from './dtos/createDog.dto';

@Controller()
export class AppController {
  @Get()
  getHello() {
    console.log('getHello called');
  }

  @Post()
  createMessage(@Body() body: CreateDogDto) {
    console.log(body);
  }
}
