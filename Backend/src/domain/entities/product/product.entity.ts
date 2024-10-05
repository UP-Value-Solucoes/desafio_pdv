export class Product {
    id: string;
    name: string;
    price: number;
    stock: number;

    constructor(
        id: string,
        name: string,
        price: number,
        stock: number
    ){
        this.id = id,
        this.name = name,
        this.price = price,
        this.stock = stock
    };

    getId(id: string){
        return this.id = id;
    };

    getName(name: string){
        return this.name = name;
    };

    getPrice(price:number){
        return this.price = price;
    };

    getStock(stock:number){
        return this.stock = stock;
    };
};