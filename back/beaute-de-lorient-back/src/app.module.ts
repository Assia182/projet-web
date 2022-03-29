import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ReservationModule } from './reservation/reservation.module';
import { ReservationStateModule } from './reservation-state/reservation-state.module';
import { ProductModule } from './product/product.module';
import { BasketModule } from './basket/basket.module';
import { config } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, ReservationModule, ReservationStateModule, ProductModule, BasketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
