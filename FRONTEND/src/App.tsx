import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SalesForm from './components/SalesForm';

const App: React.FC = () => {
  return (
    <div>
      <h1>Sistema de Vendas</h1>
      <ProductForm /> 
      <ProductList />
      <SalesForm />
    </div>
  );
};

export default App;
