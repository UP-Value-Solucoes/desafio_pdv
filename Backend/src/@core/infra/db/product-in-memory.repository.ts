import { TReadListProduct, TReadProductById } from "../../application/types/product/product.repository";
import { Product } from "../../domain/entities/product/product.entity";
import ProductRepositoryInterface from "../../domain/repositories/product/product.repository";

export class ProductInMemoryRepository implements ProductRepositoryInterface {
  items: Product[] = [];
  async insert(product: Product): Promise<void> {
    this.items.push(product);
  };

  async findAll(): Promise<TReadListProduct> {
    return this.findAll();
  };

  async findById(productId: string): Promise<TReadProductById | null> {
    return this.findById(productId);
  };
};