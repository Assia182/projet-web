import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationStateDto } from './create-reservation-state.dto';

export class UpdateReservationStateDto extends PartialType(CreateReservationStateDto) {}
