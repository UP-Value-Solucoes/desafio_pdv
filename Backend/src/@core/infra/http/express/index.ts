import  express, { json }  from "express";
import { productRouter } from "../../presentation/routes/product/product.routes";
import { saleRouter } from "../../presentation/routes/sale/sale.routes";

export const App = express();

App.use(json());

App.use("/products", productRouter);
App.use("/sale", saleRouter);