import { ReservationState } from "src/reservation-state/entities/reservation-state.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {

    @PrimaryGeneratedColumn()
    idReservation: number

    @Column()
    dateReservation: Date

    @Column({ nullable : true })
    retrieveDate: Date

    @Column({nullable: true})
    userEmailUser: string

    @Column({nullable: true})
    reservationStateNameReservationState : string

    @ManyToOne(() => User, user => user.reservations)
    user: User;

    @ManyToOne(() => ReservationState, reservationState => reservationState.reservations)
    reservationState: ReservationState;

}
 