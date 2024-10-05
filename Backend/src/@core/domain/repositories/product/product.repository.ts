import { Product } from "../../entities/product/product.entity";

export interface ProductRepositoryInterface {
    insert(product: Product): Promise<void>;
};