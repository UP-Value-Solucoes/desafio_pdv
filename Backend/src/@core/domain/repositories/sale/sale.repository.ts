import { Sale } from "../../entities/sale/sale.entity";

interface SaleRepositoryInterface {
    insert(sale: Sale): Promise<Sale | void>;
    // findAll(): Promise<TReadListProduct>;
    // findById(productId: string): Promise<TReadProductById | null>
};

export default SaleRepositoryInterface;