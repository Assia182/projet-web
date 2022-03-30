import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationState } from 'src/reservation-state/entities/reservation-state.entity';
import { User } from 'src/user/entities/user.entity';
import { Reservation } from './entities/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation, ReservationState, User])],
  controllers: [ReservationController],
  providers: [ReservationService]
})
export class ReservationModule {}
