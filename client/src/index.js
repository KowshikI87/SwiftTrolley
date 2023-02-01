import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Header from "./components/Header";
import Product from "./components/Product";
import AddForm from "./components/AddForm";
import productData from "./mockData/data";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('/api/products');
      const data = response.data;
      setProducts(data);
    }

    getProducts();
  }, [])

  return (
    <div id="app">
      <Header total={0} />
      {products.map(product => {
        return (
          <Product
            key={product._id}
            productId={product._id}
            description={product.title}
            price={product.price}
            quantity={product.quantity}
            disabled={product.quantity > 0 ? false : true}
          />
        )
      })}
      <AddForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);