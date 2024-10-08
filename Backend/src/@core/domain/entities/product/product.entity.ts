import { ProductModel } from "../../../infra/db/models/product/product.model"

export class Product {
    public readonly id: string;
    public props: Omit<ProductModel, "id">;
    constructor(private productProps: ProductModel, id?: string){
        this.id = id || productProps.id || crypto.randomUUID(); 
        const { id: removedId, ...rest } = productProps;
        this.props = rest;
    };
    
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

    toJSON(){
        return {
            id: this.id,
            ...this.props,
        };
    }
};