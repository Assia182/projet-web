import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationStateService } from './reservation-state.service';
import { CreateReservationStateDto } from './dto/create-reservation-state.dto';

@Controller('reservation-state')
export class ReservationStateController {
  constructor(private readonly reservationStateService: ReservationStateService) {}

  @Post()
  create(@Body() createReservationStateDto: CreateReservationStateDto) {
    return this.reservationStateService.create(createReservationStateDto);
  }

  @Get()
  findAll() {
    return this.reservationStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationStateService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationStateService.remove(+id);
  }
}
