import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepo: Repository<Coffee>,
  ) {}

  findAll() {
    return this.coffeeRepo.find();
  }

  async findOne(id: number) {
    const coffee = await this.coffeeRepo.findOneBy({ id: id });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  async create(createCoffeeDto: CreateCoffeeDto | CreateCoffeeDto[]) {
    const coffeeDtos = Array.isArray(createCoffeeDto)
      ? createCoffeeDto
      : [createCoffeeDto];
    const coffees = this.coffeeRepo.create(coffeeDtos);
    return this.coffeeRepo.save(coffees);
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepo.preload({
      id: +id,
      ...updateCoffeeDto,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeeRepo.save(coffee);
  }

  async remove(id: number) {
    const coffee = await this.findOne(id);
    return this.coffeeRepo.remove(coffee);
  }
}
