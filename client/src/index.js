import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Product from "./components/Product";
import AddForm from "./components/AddForm";
import productData from "./mockData/data";

const App = () => {
  return (
    <div id="app">
      <Header total={0} />
      {productData.map(product => {
        return (
          <Product key={product.id} description={product.title} price={product.price} quantity={product.quantity} disabled={false} />
        )
      })}
      <AddForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);