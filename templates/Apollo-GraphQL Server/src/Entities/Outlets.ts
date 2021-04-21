import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Outlets extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    address!: string;

    @Column()
    state!: string;

    @Column()
    country!: string;

    @Column()
    postal_code!: string;

    @Column()
    phone!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

}