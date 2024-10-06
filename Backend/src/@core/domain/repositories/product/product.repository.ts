import { TReadListProduct, TReadProductById } from "../../../application/types/product/product.repository";
import { Product } from "../../entities/product/product.entity";

interface ProductRepositoryInterface {
    insert(product: Product): Promise<Product | void>;
    findAll(): Promise<TReadListProduct>;
    findById(productId: string): Promise<TReadProductById | null>
};

export default ProductRepositoryInterface;