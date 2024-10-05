import { ProductProps } from "../../../../shared/models/product/product.model";

export class Product {
    constructor(private productProps: ProductProps){};

    getId(){
        return this.productProps.id;
    };

    getName(){
        return this.productProps.name;
    };

    getPrice(){
        return this.productProps.price;
    };

    getStock(){
        return this.productProps.stock;
    };
};