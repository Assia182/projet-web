import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Basket } from 'src/basket/entities/basket.entity';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Basket])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
