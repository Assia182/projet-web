import { Basket } from "src/basket/entities/basket.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";
import { PrimaryColumn, Column, Entity, OneToOne, OneToMany } from "typeorm";


@Entity()
export class User {
    @PrimaryColumn()
    emailUser : string;

    @Column()
    nameUser : string;

    @Column()
    passwordUser : string;

    @Column()
    isAdmin : boolean;

    @OneToOne(() => Basket, basket => basket.user, { nullable: true })
    basket: Basket;

    @OneToMany(() => Reservation, reservation => reservation.user, { nullable: true })
    reservations: Reservation[];


}
