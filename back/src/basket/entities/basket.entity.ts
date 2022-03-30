import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm"

@Entity()
export class Basket {
    @PrimaryColumn()
    emailUser: string

    @PrimaryColumn()
    idProduct: number

    @OneToOne(() => User, user => user.basket, { nullable: true })
    user: User;

    @OneToMany(() => Product, product => product.basket, { nullable: true })
    products: Product[];

}
