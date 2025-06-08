import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(public appRepository: AppRepository) {}

  findAll() {
    return this.appRepository.findAll();
  }

  findById(id: string): any {
    return this.appRepository.findOne(id);
  }

  create(item: { name: string; age: number }) {
    const dog = {
      id: crypto.randomUUID(),
      name: item.name,
      age: item.age,
    };
    return this.appRepository.create(dog);
  }
}
