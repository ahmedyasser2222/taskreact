import { useState, createContext, Dispatch, SetStateAction } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number };
};

interface ProductsContextInterface {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  productsCart: Product[];
  setProductsCart: Dispatch<SetStateAction<Product[]>>;
}
const defaultState = {
  products: [],
  setProducts: (product: Product[]) => {},
  productsCart: [],
  setProductsCart: (product: Product[]) => {},
} as ProductsContextInterface;

const ProductsContext = createContext(defaultState);

interface UserProviderProps {
  children: React.ReactNode;
}

const ProductsProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsCart, setProductsCart] = useState<Product[]>([]);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, productsCart, setProductsCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
