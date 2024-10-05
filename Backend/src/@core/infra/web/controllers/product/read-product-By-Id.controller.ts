import { Request, Response } from "express";
import { TReadProductById } from "../../../../application/types/product/product.repository";
import { ReadProductByIdUseCase } from "../../../../application/use_case/product/read-product-id.use_case";

export class ReadProductById{
    constructor(private readProductById: ReadProductByIdUseCase){};

    async getProductById(req: Request, res:Response): Promise<Response>{
        const { id } = req.params;
        const product: TReadProductById | null = await this.readProductById.execute(id);
        return res.status(200).json(product);
    };
};