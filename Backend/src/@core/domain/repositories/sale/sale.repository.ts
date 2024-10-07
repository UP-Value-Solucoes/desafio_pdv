import { Sale } from "../../entities/sale/sale.entity";

interface SaleRepositoryInterface {
    save(sale: Sale): Promise<void>;
};

export default SaleRepositoryInterface;