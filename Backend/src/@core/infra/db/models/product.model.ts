import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import "reflect-metadata";

@Entity("products")
export class ProductModel {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column()
    stock: number;

    constructor(id:string, name: string, price: number, stock: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    };
};

