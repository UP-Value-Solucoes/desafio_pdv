import React, { useState } from 'react'; // Import necessário
import { getProducts, updateProductStock } from '../services/ProductService'; // Import de serviços

const SalesForm: React.FC = () => {
  const [productId, setProductId] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const products = getProducts();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (productId !== null) {
      const product = products.find(p => p.id === productId);
      if (product && quantity > 0 && quantity <= product.stock) {
        setTotal(product.price * quantity);
        updateProductStock(productId, quantity);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => setProductId(Number(e.target.value))} required>
        <option value="">Selecione um Produto</option>
        {products.map(product => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
      <label>
  Quantidade:
  <input 
    type="number" 
    placeholder="Digite o preço" 
    value={quantity} 
    onChange={(e) => setQuantity(Number(e.target.value))} 
    required 
  />
</label>
      <button type="submit">Realizar Venda</button>
      {total > 0 && <p>Valor total da venda: R$ {total.toFixed(2)}</p>}
    </form>
  );
};

export default SalesForm;
