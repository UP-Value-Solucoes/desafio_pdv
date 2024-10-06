import  express, { json }  from "express";
import { productRouter } from "../../presentation/routes/product/product.routes";

export const App = express();

App.use(json());

App.use("/products", productRouter);