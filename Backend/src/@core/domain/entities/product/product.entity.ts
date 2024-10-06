import { ProductModel } from "../../../../@core/infra/db/models/product.model"

export class Product {
    public readonly id: string;
    public props: Omit<ProductModel, "id">;
    constructor(private productProps: ProductModel, id?: string){
        // this.id = id || productProps.id ||crypto.randomUUID();
        // this.props = {
        //     ...productProps,
        //     id: undefined
        // }
        this.id = id || productProps.id || crypto.randomUUID(); // Gera o ID se não for passado
        const { id: removedId, ...rest } = productProps; // Remove o id explicitamente do productProps
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