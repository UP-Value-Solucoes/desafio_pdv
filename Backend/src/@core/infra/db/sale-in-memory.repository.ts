import { Sale } from "../../domain/entities/sale/sale.entity";
import SaleRepositoryInterface from "../../domain/repositories/sale/sale.repository";

export class SaleInMemoryRepository implements SaleRepositoryInterface {
    sales: Sale[] = [];

    async insert(sales: Sale): Promise<Sale> {
        return await this.insert(sales);
    };

    async save(sale: Sale): Promise<void> {
       this.sales.push(sale);
    };
};