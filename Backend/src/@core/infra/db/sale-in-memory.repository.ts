import { Sale } from "../../domain/entities/sale/sale.entity";
import SaleRepositoryInterface from "../../domain/repositories/sale/sale.repository";

export class SaleInMemoryRepository implements SaleRepositoryInterface {
    sales: Sale[] = [];


    save(sale: Sale): Promise<void> {
        throw new Error("Method not implemented.");
    };
};