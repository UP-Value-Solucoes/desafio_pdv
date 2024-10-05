import { Product } from "../../../domain/entities/product/product.entity";
import { v4 as uuidv4} from "uuid";
import { ProductRepositoryInterface } from "../../../domain/repositories/product/product.repository";
import { TCreateProductInput, TReadListProduct } from "../../types/product/product.repository";

export class CreateProductUseCase {
    constructor(private productRepo: ProductRepositoryInterface){}
    
    async execute(input: TCreateProductInput): Promise<TReadListProduct>{
        const productId = uuidv4();
        const product = new Product({
            id: productId,
            ...input
        });
        await this.productRepo.insert(product);
        return product.toJSON();
    };
};

