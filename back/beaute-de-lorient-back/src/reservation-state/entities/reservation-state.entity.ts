import { Reservation } from "src/reservation/entities/reservation.entity";
import { Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class ReservationState {

    @PrimaryColumn()
    nameReservationState: string

    @OneToMany(() => Reservation, reservation => reservation.reservationState, { nullable: true })
    reservations: Reservation[];
}
