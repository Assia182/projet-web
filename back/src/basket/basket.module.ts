import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Product } from 'src/product/entities/product.entity';
import { Basket } from './entities/basket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Basket, User, Reservation, Product])],
  controllers: [BasketController],
  providers: [BasketService]
})
export class BasketModule {}
