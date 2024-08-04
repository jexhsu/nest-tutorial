import { config } from './../../node_modules/rxjs/src/internal/config';
import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Espresso',
      brand: 'Starbucks',
      flavors: ['bitter', 'strong'],
    },
    {
      id: 2,
      name: 'Latte',
      brand: 'Dunkin',
      flavors: ['creamy', 'smooth'],
    },
    {
      id: 3,
      name: 'Cappuccino',
      brand: "Peet's Coffee",
      flavors: ['frothy', 'bold'],
    },
    {
      id: 4,
      name: 'Americano',
      brand: 'Blue Bottle',
      flavors: ['rich', 'smooth'],
    },
    {
      id: 5,
      name: 'Mocha',
      brand: 'Tim Hortons',
      flavors: ['chocolate', 'sweet'],
    },
    {
      id: 6,
      name: 'Macchiato',
      brand: 'Illy',
      flavors: ['intense', 'caramel'],
    },
    {
      id: 7,
      name: 'Flat White',
      brand: 'Costa Coffee',
      flavors: ['velvety', 'rich'],
    },
    {
      id: 8,
      name: 'Cold Brew',
      brand: 'Dutch Bros',
      flavors: ['smooth', 'bold'],
    },
    {
      id: 9,
      name: 'Affogato',
      brand: 'La Colombe',
      flavors: ['espresso', 'vanilla'],
    },
    {
      id: 10,
      name: 'Ristretto',
      brand: 'Gloria Jeans',
      flavors: ['intense', 'full-bodied'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }
  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }
  update(id: string, updateCoffeeDto: any) {
    const existingCofee = this.findOne(id);
    if (existingCofee) {
      // update this existing entity
    }
  }
  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
