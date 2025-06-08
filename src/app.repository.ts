import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class AppRepository {
  private _file = 'dogs.json';

  async findOne(id: string) {
    const contents = await readFile(this._file, 'utf8');
    const dogs= JSON.parse(contents);
    return dogs[id];
  }

  async findAll() {
    const contents = await readFile(this._file, 'utf8');
    const dogs = JSON.parse(contents);

    return dogs;
  }

  async create(item: { name: string; age: number }) {
    const contents = await readFile(this._file, 'utf8');
    const dogs = JSON.parse(contents);

    const id = crypto.randomUUID();

    dogs[id] = { id, "name":item.name, age:item.age };

    await writeFile(this._file, JSON.stringify(dogs));
  }
}