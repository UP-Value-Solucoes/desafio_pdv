import { Product } from '../models/Product';

const PRODUCTS_KEY = 'products';

export const getProducts = (): Product[] => {
  const products = localStorage.getItem(PRODUCTS_KEY);
  return products ? JSON.parse(products) : [];
};

export const saveProduct = (product: Product) => {
  const products = getProducts();
  products.push(product);
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const updateProductStock = (productId: number, quantity: number) => {
  const products = getProducts();
  const updatedProducts = products.map(product => 
    product.id === productId ? { ...product, stock: product.stock - quantity } : product
  );
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(updatedProducts));
};
