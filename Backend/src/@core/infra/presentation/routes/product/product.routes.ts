import { Router, Request, Response } from "express";
import { CreateProductController } from "../../controllers/product/create-product.controller";
import { ReadListProductController } from "../../controllers/product/read-list-product.controller";

import { CreateProductUseCase } from "../../../../application/use_case/product/create-product.use_case";
import { ReadListProductUseCase } from "../../../../application/use_case/product/read-list-products.use_case";
import { ReadProductByIdUseCase } from "../../../../application/use_case/product/read-product-id.use_case";

import { ProductInMemoryRepository } from "../../../db/product-in-memory.repository";
import { ReadProductByIdController } from "../../controllers/product/read-product-By-Id.controller";

// Inicializar o repositório
const productRepository = new ProductInMemoryRepository();

// Inicializar os casos de uso com o repositório
const createProductUseCase = new CreateProductUseCase(productRepository);
const readListProductUseCase = new ReadListProductUseCase(productRepository);
const readProductByIdUseCase = new ReadProductByIdUseCase(productRepository);

// Inicializar os controladores passando os casos de uso como dependências
const createProductController = new CreateProductController(createProductUseCase);
const readListProductController = new ReadListProductController(readListProductUseCase);
const readProductByIdController = new ReadProductByIdController(readProductByIdUseCase);

export const productRouter = Router();

// Definir as rotas
// productRouter.post("/", (req, res) => createProductController.createProduct(req, res));
// productRouter.get("/", (req, res) => readListProductController.getListProduct(req, res));
// productRouter.get("/:id", (req, res) => readProductByIdController.getProductById(req, res));

// Definir as rotas com tipos de Request e Response
productRouter.post("/", async (req: Request, res: Response) => {
    // return createProductController.createProduct(req, res);
    res.send(createProductController.createProduct(req, res))
});

productRouter.get("/", async (req: Request, res: Response) => {
    // return readListProductController.getListProduct(req, res);
    res.send(readListProductController.getListProduct(req, res));
});

productRouter.get("/:id", async (req: Request, res: Response) => {
    // return readProductByIdController.getProductById(req, res);
    res.send(readProductByIdController.getProductById(req, res));
});

