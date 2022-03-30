import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
  
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservationRepository.save(createReservationDto);
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    const reservation = await this.reservationRepository.findOne(id);
    if(!reservation){
      throw new HttpException("Reservation doesn't exist", 404)
    }
    await this.reservationRepository.update(id , updateReservationDto);
    return await this.reservationRepository.findOne(id);
    
  }

  findAll() {
    return this.reservationRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }


  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
