import { SalesModel } from "../../../infra/db/models/sale/sale.model";

export class Sale {
    constructor(private saleProps : SalesModel){};

    getId(){
        return this.saleProps.id;
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
};  