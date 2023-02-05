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
      //if the item already exists in cart then increase its quantity by 1
      //else add the new item to the cart
      let addedCartItem = response.data.item;
      let existingCartItem = cartItems.find(item => item._id ===  addedCartItem._id)

      let newCartItems;
      if (existingCartItem) {
        newCartItems = cartItems.map(cartItem => {
          let newCartItem = {...cartItem};
          if (cartItem._id === existingCartItem._id) {
            newCartItem.quantity += 1
          }
          return newCartItem
        })
      } else {
        newCartItems = cartItems.concat(addedCartItem)
      }

      setCartItems(newCartItems)

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

  const handleAddProductCick = async (product) => {
    const response = await axios.post('/api/products', product);
    setProducts(products.concat(response.data));
  }

  const handleUpdateProduct = async (id, title, price, quantity) => {
    try{
      const response = await axios.put(`/api/products/${id}`, {title: title, price:price, quantity:quantity} )
      console.log("successfully updated product", response.data)

      let newProducts = products.map(product => {
        let newProduct = {...product}
        if (product._id === response.data._id) {
          newProduct.title = title
          newProduct.quantity = quantity
          newProduct.price = price
        }
        return newProduct
      }) 

      setProducts(newProducts)
    } catch(error) {
      console.log("could not uddate the product with product id", id)
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
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                disabled={product.quantity > 0 ? false : true}
                onDelete={handleDelete}
                onAddToCart={handleAddToCartClick}
                onUpdateProduct={handleUpdateProduct}
              />
            )
          })}
        </div>
      </main>
      <AddForm
        onAddProduct={handleAddProductCick}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
