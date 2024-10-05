import { Product } from "../../../domain/entities/product/product.entity";
import { ProductRepositoryInterface } from "../../../domain/repositories/product/product.repository";
import { TReadListProduct } from "../../types/product/product.repository";

export class ReadProductUseCase {
    constructor(private productRepo: ProductRepositoryInterface){};

    async execute(): Promise<TReadListProduct>{
        const products: TReadListProduct = await this.productRepo.findAll();
        return products;
    };
};