import { Product } from "../../../domain/entities/product/product.entity";
import { TCreateProductInput, TReadProductById } from "../../types/product/product.repository";
import ProductRepositoryInterface from "../../../domain/repositories/product/product.repository";

export class CreateProductUseCase {
    constructor(private productRepo: ProductRepositoryInterface){}
    
    async execute(input: TCreateProductInput): Promise<TReadProductById>{
        const id = this.generateId();
        const product = new Product({
            ...input,
            id, 
        });
        await this.productRepo.insert(product);
        return product.toJSON();
    }

    private generateId(): any {
        return crypto.randomUUID();
    };
};

