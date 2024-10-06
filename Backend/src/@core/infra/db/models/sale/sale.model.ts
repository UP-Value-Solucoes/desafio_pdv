import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("sales")
export class SalesModel {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    productId: string;

    @Column()
    quantity: number;

    @Column()
    total: number;

    constructor(id:string, productId: string, quantity: number, total: number){
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
        this.total = total;
    };
};