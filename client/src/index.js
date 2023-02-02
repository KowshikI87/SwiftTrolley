import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Header from "./components/Header";
import Product from "./components/Product";
import AddForm from "./components/AddForm";
import productData from "./mockData/data";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleDelete = async (id) => {
    console.log(id);
    
    try {
      console.log('entered try block')
      const response = await axios.delete(`/api/products/${id}`);
      let newProducts = products.filter(product => product._id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.error("Error deleting product with id:", id, error);
    }
  };

  const handleAddToCartClick = async (productId) => {
    try {
      let response = await axios.post("/api/add-to-cart", { productId });
      console.log('logging response', {response})
      let newCartItem = response.data.item;
      setCartItems(cartItems.concat(newCartItem))
    } catch (error) {
      console.log("Error adding item to cart with id", {productId})
    }
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('/api/products');
      const data = response.data;
      setProducts(data);
    }

    getProducts();
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await axios.get("api/cart");
      const cartItems = response.data;
      setCartItems(cartItems);
    }

    fetchCartItems()
  }, [])

  useEffect(() => {
    let cartTotal = 0;
    cartItems.forEach((item) => {
      console.log('logging item', {item})
      cartTotal += item.price * item.quantity;
    })
    setCartTotal(cartTotal);
  }, [cartItems])

  return (
    <div id="app">
      <Header total={cartTotal} />
      {products.map(product => {
        return (
          <Product
            key={product._id}
            productId={product._id}
            description={product.title}
            price={product.price}
            quantity={product.quantity}
            disabled={product.quantity > 0 ? false : true}
            onDelete={handleDelete}
            onAddToCart={handleAddToCartClick}
          />
        )
      })}
      <AddForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
