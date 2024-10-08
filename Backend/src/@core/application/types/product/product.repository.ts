import { ProductModel } from "../../../infra/db/models/product/product.model";

export type TCreateProductInput = Pick<ProductModel, "name" | "price" | "stock">;

export type TUpadateProductData = Partial<TCreateProductInput>;

export type TReadListProduct = TCreateProductInput[];

export type TReadProductById = ProductModel;

