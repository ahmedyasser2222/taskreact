import React, { useState, useEffect, useCallback, useContext } from "react";
import "./style.scss";
import Card from "../../components/Card";
import Head from "../../components/Head";
import axios from "axios";
import Categories from "./Categories";
import { ProductsContext } from "../../context/Products";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

const Home = () => {
  const { products, setProducts } = useContext(ProductsContext);
  useEffect(() => {
    async function getData() {
      try {
        const data = await axios.get("https://fakestoreapi.com/products");
        setProducts(data.data);
      } catch (error) {
        alert("error");
      }
    }
    getData();
  }, []);

  return (
    <div className="home">
      <Head
        title="All Products"
        subTitle="The best selection of products for you"
      />
      <Categories />
      <div className="products container">
        {products.length >= 1 &&
          products.map((product, index) => (
            <Card
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
              rate={product.rating.rate}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
