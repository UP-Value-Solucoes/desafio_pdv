import { SalesModel } from "../../../infra/db/models/sale/sale.model";

export type TCreateSaleInput = Pick<SalesModel, "productId" | "quantity" | "total">;

export type TReadListSale = TCreateSaleInput[];

export type TReadSaleById = SalesModel;