import { Basket } from "src/basket/entities/basket.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    idProduct: number

    @Column()
    nameProduct: string

    @Column()
    imageProduct: string

    @Column()
    priceProduct: number

    @ManyToOne(() => Basket, basket => basket.products)
    basket: Basket;



}
