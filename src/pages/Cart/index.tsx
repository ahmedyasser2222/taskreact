import React, { useEffect, useState } from "react";
import Head from "../../components/Head";
import CardCart from "../../components/CardCart";
import "./style.scss";
import axios from "axios";
import { decrement } from "../../redux/slices/cart";
import { useDispatch } from "react-redux";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

const Cart = () => {
  const [productsCart, setProductsCart] = useState<Product[]>();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const data = await axios.get(
          "https://fakestoreapi.com/products?limit=5"
        );
        setProductsCart(data.data);
        console.log(data.data);
      } catch (error) {
        alert("error");
      }
    }
    getData();
  }, []);
  const deleteProduct = (id: number) => {
    setProductsCart((oldValues) => {
      return oldValues?.filter((item) => item.id !== id);
    });
    dispatch(decrement());
  };
  return (
    <div className="cart">
      <Head
        title="Shopping Cart"
        subTitle="You choose your favorite products"
      />
      <div className="container cart-con">
        <div>
          {productsCart?.length
            ? productsCart.map((product, index) => (
                <CardCart
                  id={product.id}
                  category={product.category}
                  count={product.rating.count}
                  image={product.image}
                  price={product.price}
                  rate={product.rating.rate}
                  title={product.title}
                  key={index}
                  onClick={() => deleteProduct(product.id)}
                />
              ))
            : "The cart is empty"}
        </div>
      </div>
    </div>
  );
};

export default Cart;
