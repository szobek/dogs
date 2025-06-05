interface Item {
  id: number;
  name: string;
}

export class AppRepository {
  private data: Item[] = [];
  constructor() {
    // Initialize with some dummy data
    this.data = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
  }

  findAll(): Item[] {
    return this.data;
  }

  findById(id: number): Item | undefined {
    return this.data.find((item) => item.id === id);
  }

  create(item: Item): void {
    this.data.push(item);
  }
}
