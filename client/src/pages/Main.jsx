import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

function Main() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:5001/api/products", { signal: controller.signal })
      .then((res) => {
        setProducts(res.data);
        setLoaded(true)
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [loaded]);

  const reversedProducts = [...products].reverse();

  return (
    <div>
      <h1>Enter Product</h1>
      <ProductForm setLoaded={setLoaded}/>
      <h1>All Products</h1>
      {loaded && <ProductList products={reversedProducts}/>}
    </div>
  );
}

export default Main;
