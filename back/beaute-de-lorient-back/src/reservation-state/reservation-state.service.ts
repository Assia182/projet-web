import { Injectable } from '@nestjs/common';
import { CreateReservationStateDto } from './dto/create-reservation-state.dto';

@Injectable()
export class ReservationStateService {
  create(createReservationStateDto: CreateReservationStateDto) {
    return 'This action adds a new reservationState';
  }

  findAll() {
    return `This action returns all reservationState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservationState`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservationState`;
  }
}
