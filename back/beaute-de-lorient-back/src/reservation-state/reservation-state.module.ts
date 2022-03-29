import { Module } from '@nestjs/common';
import { ReservationStateService } from './reservation-state.service';
import { ReservationStateController } from './reservation-state.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from 'src/reservation/entities/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],
  controllers: [ReservationStateController],
  providers: [ReservationStateService]
})
export class ReservationStateModule {}
