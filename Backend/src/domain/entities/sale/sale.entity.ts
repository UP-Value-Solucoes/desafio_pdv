import { Product } from "../product/product.entity";

export class Sale {
    id: string;
    products: Product[];
    amount: number;
    total: number

    constructor(
        id: string,
        products: Product[],
        amount: number,
        total: number
    ){
        this.id = id,
        this.products = products,
        this.amount = amount,
        this.total = total
    };

    getId(id: string){
        return this.id = id;
    };

    getProducts(products: Product[]){
        return this.products = products;
    };

    getAmount(amount: number){
        return this.amount = amount;
    };

    getTotal(total: number){
        return this.total = total;
    };
};  