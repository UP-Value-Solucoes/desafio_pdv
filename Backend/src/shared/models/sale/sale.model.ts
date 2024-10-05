import { Product } from "../../../@core/domain/entities/product/product.entity";

export type SaleProps = {
    id: string,
    product: Product[],
    amount: number,
    total: number
};