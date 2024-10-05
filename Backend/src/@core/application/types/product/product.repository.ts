import { ProductModel } from "../../../infra/db/models/product.model";

export type TCreateProductInput = Pick<ProductModel, "name" | "price" | "stock">;

export type TUpadateProductData = Partial<TCreateProductInput>;

export type TReadListProduct = TCreateProductInput[];

