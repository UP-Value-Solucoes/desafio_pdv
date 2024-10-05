import { TReadListProduct, TReadProductById } from "../../../application/types/product/product.repository";
import { Product } from "../../entities/product/product.entity";

export interface ProductRepositoryInterface {
    insert(product: Product): Promise<void>;
    findAll(): Promise<TReadListProduct>;
    findById(productId: string): Promise<TReadProductById | null>
};