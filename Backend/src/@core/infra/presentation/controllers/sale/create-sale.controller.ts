import { Request, Response } from "express";
import { TCreateSaleInput } from "../../../../application/types/sale/sale.repository";
import { CreateSaleUseCase } from "../../../../application/use_case/sale/create-sale.use_case";

export class CreateSaleController {
    constructor(private createSaleUseCase: CreateSaleUseCase) {}

    async createSale(req: Request, res: Response): Promise<Response> {
        const { productId, quantity }: TCreateSaleInput = req.body;

        if (typeof productId !== 'string' || typeof quantity !== 'number') {
            return res.status(400).json({ message: "Invalid input data" });
        }

        try {
            const sale = await this.createSaleUseCase.execute(productId, quantity);
            return res.status(201).json(sale);
        } catch (error) {
            const errorMessage = (error as Error).message;
            return res.status(400).json({ message: errorMessage });
        };
    };
};
