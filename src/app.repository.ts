import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { Dog } from './dog.model';

@Injectable()
export class AppRepository {
  private _file = 'dogs.json';

  async findOne(id: string):Promise<Dog> {
    const contents = await readFile(this._file, 'utf8');
    const dogs= JSON.parse(contents);
    return dogs[id];
  }

  async findAll():Promise<Dog[]> {
    const contents = await readFile(this._file, 'utf8');
    const dogs = JSON.parse(contents);
    return dogs;
  }

  async create(item: Dog):Promise<Dog> {
    const contents = await readFile(this._file, 'utf8');
    const dogs = JSON.parse(contents);
    dogs[item.id] = { id:item.id, "name":item.name, age:item.age };
    await writeFile(this._file, JSON.stringify(dogs));
    const createdDog = dogs[item.id];
    console.log('Created Dog:', createdDog);
    return createdDog;
  }
}