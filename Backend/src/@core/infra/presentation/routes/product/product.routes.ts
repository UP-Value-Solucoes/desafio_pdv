import { Router, Request, Response } from "express";
import { CreateProductController } from "../../controllers/product/create-product.controller";
import { ReadListProductController } from "../../controllers/product/read-list-product.controller";

import { CreateProductUseCase } from "../../../../application/use_case/product/create-product.use_case";
import { ReadListProductUseCase } from "../../../../application/use_case/product/read-list-products.use_case";
import { ReadProductByIdUseCase } from "../../../../application/use_case/product/read-product-id.use_case";

import { ProductInMemoryRepository } from "../../../db/product-in-memory.repository";
import { ReadProductByIdController } from "../../controllers/product/read-product-By-Id.controller";

const productRepository = new ProductInMemoryRepository();

const createProductUseCase = new CreateProductUseCase(productRepository);
const readListProductUseCase = new ReadListProductUseCase(productRepository);
const readProductByIdUseCase = new ReadProductByIdUseCase(productRepository);

const createProductController = new CreateProductController(createProductUseCase);
const readListProductController = new ReadListProductController(readListProductUseCase);
const readProductByIdController = new ReadProductByIdController(readProductByIdUseCase);

export const productRouter = Router();

productRouter.post("/", async (req: Request, res: Response) => {
    await createProductController.createProduct(req, res);
});

productRouter.get("/", async (req: Request, res: Response) => {
    await readListProductController.getListProduct(req, res);
});

productRouter.get("/:id", async (req: Request, res: Response) => {
    await readProductByIdController.getProductById(req, res);
});

