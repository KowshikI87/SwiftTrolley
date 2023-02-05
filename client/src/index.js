import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Header from "./components/Header";
import Product from "./components/Product";
import AddForm from "./components/AddForm";
import CartItems from "./components/CartItems";
import productData from "./mockData/data";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleDelete = async (id) => {
    try {
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
      console.log("logging response for add to cart click", {response})

      //set cart items
      let newCartItem = response.data.item;
      setCartItems(cartItems.concat(newCartItem))

      //reduce quantity of product added
      let updatedProducts = products.map(product => {
        if (product._id === productId) {
          product.quantity -= 1;
        }
        return product;
      })
      setProducts(updatedProducts);
    } catch (error) {
      console.log("Error adding item to cart with id", {productId})
    }
  }

  const handleCheckoutClick = async () => {
    try {
      await axios.post("/api/checkout");
      console.log("Successfully Checked Out");
      setCartItems([]);
    } catch {
      console.log("Error checking out");
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
      console.log('logging item in useEffect', {item})
      cartTotal += item.price * item.quantity;
    })
    setCartTotal(cartTotal.toFixed(2));
  }, [cartItems])

  return (
    <div id="app">
      <Header total={cartTotal}
        cartItems={cartItems}
        onCheckout={handleCheckoutClick}/>
      <main>
        <div className="product-listing">
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
        </div>
      </main>
      <AddForm
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
