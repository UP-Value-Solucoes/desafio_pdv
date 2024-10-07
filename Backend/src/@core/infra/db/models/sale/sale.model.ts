import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ProductModel } from "../product/product.model";

@Entity("sales")
export class SalesModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => ProductModel)
    @JoinColumn({name: "productId"})
    productId: ProductModel;

    @Column()
    quantity: number;

    @Column()
    total: number;

    constructor(id:string, productId: ProductModel, quantity: number, total: number){
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
        this.total = total;
    };
};