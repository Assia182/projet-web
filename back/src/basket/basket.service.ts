import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBasketDto } from './dto/create-basket.dto';
import { Basket } from './entities/basket.entity';

@Injectable()
export class BasketService {

  constructor(
    @InjectRepository(Basket)
    private readonly basketRepository: Repository<Basket>,
  ) {}

  create(createBasketDto: CreateBasketDto) {
    return this.basketRepository.save(createBasketDto);  
  }

  findOne(id: number) {
    return `This action returns a #${id} basket`;
  }


  remove(id: number) {
    return `This action removes a #${id} basket`;
  }
}
