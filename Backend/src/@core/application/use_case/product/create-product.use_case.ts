import { Product } from "../../../domain/entities/product/product.entity";
import { TCreateProductInput, TReadProductById } from "../../types/product/product.repository";
import ProductRepositoryInterface from "../../../domain/repositories/product/product.repository";

export class CreateProductUseCase {
    constructor(private productRepo: ProductRepositoryInterface){}
    
    async execute(input: TCreateProductInput): Promise<TReadProductById>{
        // const product = new Product({
        //     id = this.productRepo.findById(id)
        //     ...input
        // });
        // await this.productRepo.insert(product);
        // return product.toJSON();
        const id = this.generateId();

        // Cria o produto passando o ID e os demais dados
        const product = new Product({
            ...input,
            id, // Adiciona o ID ao produto
        });

        // Insere o produto no repositório
        await this.productRepo.insert(product);

        // Retorna o produto como JSON
        return product.toJSON();
    }
    private generateId(): any {
        throw new Error("Method not implemented.");
    };
};

