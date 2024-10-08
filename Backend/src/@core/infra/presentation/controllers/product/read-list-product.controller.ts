import { Request, Response } from "express";
import { TReadListProduct } from "../../../../application/types/product/product.repository";
import { ReadListProductUseCase } from "../../../../application/use_case/product/read-list-products.use_case";

export class ReadListProductController {
    constructor(private readListProductUseCase: ReadListProductUseCase){};

    async getListProduct(req: Request, res:Response): Promise<Response>{
        const productList: TReadListProduct = await this.readListProductUseCase.execute();
        return res.status(200).json(productList);
    };
};