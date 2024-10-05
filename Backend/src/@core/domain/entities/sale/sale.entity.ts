import { SaleProps } from "../../../../shared/models/sale/sale.model";

export class Sale {
    constructor(private saleProps : SaleProps){};

    getId(){
        return this.saleProps.id;
    };

    getProducts(){
        return this.saleProps.product;
    };

    getAmount(){
        return this.saleProps.amount;
    };

    getTotal(){
        return this.saleProps.total;
    };
};  