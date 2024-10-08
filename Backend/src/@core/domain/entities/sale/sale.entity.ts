import { SalesModel } from "../../../infra/db/models/sale/sale.model";

export class Sale {
    public readonly id: string;
    public props: Omit<SalesModel, "id">;
    constructor(private saleProps : SalesModel){
        this.id = this.saleProps.id;
        const { id: removedId, ...rest } = saleProps;
        this.props = rest;
    };

    getId(){
        return this.id;
    };

    getProductsId(){
        return this.saleProps.productId;
    };

    getQuantity(){
        return this.saleProps.quantity;
    };

    getTotal(){
        return this.saleProps.total;
    };

    toJSON(){
        return {
            id: this.id,
            ...this.props,
        };
    }
};  