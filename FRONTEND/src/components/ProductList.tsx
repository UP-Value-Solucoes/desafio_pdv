import React from 'react'; // Certifique-se de que há um import React

import { getProducts } from '../services/ProductService'; // Import necessário para obter os produtos

const ProductList: React.FC = () => {
  const products = getProducts();

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - R$ {product.price.toFixed(2)} - Estoque: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
