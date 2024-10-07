import { Sale } from "../../../domain/entities/sale/sale.entity";
import SaleRepositoryInterface from "../../../domain/repositories/sale/sale.repository";
import { TCreateSaleInput, TReadSaleById } from "../../types/sale/sale.repository";

export class CreateSaleUseCase {
    constructor(private saleRepo: SaleRepositoryInterface){};

    async execute(input: TCreateSaleInput): Promise<TReadSaleById> {
        const id = this.generateId();
        const sale = new Sale({
            id,
            ...input,
        });
        await this.saleRepo.insert(sale);
        return sale.toJSON()
    };
    generateId(): any {
        return crypto.randomUUID();
    };
};