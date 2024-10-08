import { TReadListProduct, TReadProductById } from "../../application/types/product/product.repository";
import { Product } from "../../domain/entities/product/product.entity";
import ProductRepositoryInterface from "../../domain/repositories/product/product.repository";
import { ProductModel } from "./models/product/product.model";

export class ProductInMemoryRepository implements ProductRepositoryInterface {
  items: Product[] = [];
  
  async insert(product: Product): Promise<void> {
    this.items.push(product);
  };

  async findAll(): Promise<TReadListProduct> {
    return this.items.map(item => item.toJSON());
  };

  async findById(productId: string): Promise<TReadProductById | null> {
    const product = this.items.find(item => item.getId() === productId);
    return product ? product.toJSON() : null;
  };

};