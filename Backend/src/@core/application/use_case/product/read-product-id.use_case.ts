import ProductRepositoryInterface from "../../../domain/repositories/product/product.repository";
import { TReadProductById } from "../../types/product/product.repository";

export class ReadProductByIdUseCase {
    constructor(private productRepo: ProductRepositoryInterface){};

    async execute(productId: string): Promise<TReadProductById | null>{
        const product: TReadProductById | null = await this.productRepo.findById(productId);
        if(!product){
            throw new Error("Product not found.")
        }
        return product;
    };
};

