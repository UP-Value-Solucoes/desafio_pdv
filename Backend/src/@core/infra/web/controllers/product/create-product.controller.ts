import { Request, Response } from "express";
import { CreateProductUseCase } from "../../../../application/use_case/product/create-product.use_case";
import { TCreateProductInput } from "../../../../application/types/product/product.repository";

export class ProductController {
    constructor(private createProductRepo: CreateProductUseCase){};

    async createProduct(req: Request, res: Response): Promise<Response> {
        const input: TCreateProductInput = req.body;
        const product = await this.createProductRepo.execute(input)
        return res.status(201).json(product);
    };
};