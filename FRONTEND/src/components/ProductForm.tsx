import React, { useState } from 'react';
import { saveProduct } from '../services/ProductService';

const ProductForm: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      price,
      stock,
    };
    saveProduct(newProduct);
    setName('');
    setPrice(0);
    setStock(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome do Produto:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <br />
      </label>
      
    <label>
        <br />
        Preço:
    <input 
    type="number" 
    placeholder="Digite o preço" 
    value={price} 
    onChange={(e) => setPrice(Number(e.target.value))} 
    required 
    />
    <br />
    </label>


    <label>
        <br />
  Nº Estoque:
  <input 
    type="number" 
    placeholder="Quantidade em estoque:" 
    value={stock} 
    onChange={(e) => setStock(Number(e.target.value))} 
    required 
  />
</label>
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
};

export default ProductForm;
export {}; // Adicione esta linha para garantir que o arquivo seja tratado como módulo

