import { Product } from "../../../domain/entities/product/product.entity";
import { Sale } from "../../../domain/entities/sale/sale.entity";
import ProductRepositoryInterface from "../../../domain/repositories/product/product.repository";
import SaleRepositoryInterface from "../../../domain/repositories/sale/sale.repository";
import { TReadSaleById } from "../../types/sale/sale.repository";

export class CreateSaleUseCase {
    constructor(private saleRepo: SaleRepositoryInterface, private productRepo: ProductRepositoryInterface){};

    async execute(productId: string, quantity: number): Promise<TReadSaleById> {
        const productModel = await this.productRepo.findById(productId);

        if (!productModel) {
            throw new Error("Product not found.");
        };

        if (productModel.stock < quantity) {
            throw new Error("Insufficient stock.");
        };

        const product = new Product(productModel)
        const total = product.getPrice() * quantity;
        const sale = new Sale({
            id: this.generateId(),
            productId: productModel,
            quantity,
            total
        });

        await this.saleRepo.save(sale);
        product.props.stock -= quantity;
        await this.productRepo.insert(product);
        return sale.toJSON();
    };
    generateId(): string {
        return crypto.randomUUID();
    };
};