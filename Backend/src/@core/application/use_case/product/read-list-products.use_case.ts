import ProductRepositoryInterface from "../../../domain/repositories/product/product.repository";
import { TReadListProduct } from "../../types/product/product.repository";

export class ReadListProductUseCase {
    constructor(private productRepo: ProductRepositoryInterface){};

    async execute(): Promise<TReadListProduct>{
        const products: TReadListProduct = await this.productRepo.findAll();
        return products;
    };
};