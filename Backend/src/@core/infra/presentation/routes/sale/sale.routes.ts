import { Router, Request, Response } from "express";
import { CreateSaleUseCase } from "../../../../application/use_case/sale/create-sale.use_case";
import { SaleInMemoryRepository } from "../../../db/sale-in-memory.repository";
import { ProductInMemoryRepository } from "../../../db/product-in-memory.repository"; 
import { CreateSaleController } from "../../controllers/sale/create-sale.controller";

const saleRepository = new SaleInMemoryRepository();
const productRepository = new ProductInMemoryRepository(); 

const createSaleUseCase = new CreateSaleUseCase(saleRepository, productRepository); 

export const saleRouter = Router();

saleRouter.post("/", async (req: Request, res: Response) => {
    const { productId, quantity } = req.body; 

    try {
        const sale = await createSaleUseCase.execute(productId, quantity); 
        return res.status(201).json(sale);
    } catch (error) {
        const errorMessage = (error as Error).message; 
        return res.status(400).json({ message: errorMessage });
    };
});


