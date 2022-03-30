import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketDto } from './dto/create-basket.dto';

@Controller('baskets')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post('create')
  create(@Body() createBasketDto: CreateBasketDto) {
    return this.basketService.create(createBasketDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.basketService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.basketService.remove(+id);
  }
}
