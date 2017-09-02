import { Address } from './address';

export class User {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  constructor() {
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'john_doe@gmail.com';
    this.address = {
      street: '50 Main St',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch series', 'Listen to music'];
  }
}
