import React from "react";
import ReactDOM from "react-dom/client";

const Product = ({ description, price, quantity}) => {
  return React.createElement("div", {className: "product"},
    React.createElement("div", {className: "product-details", children: [
      React.createElement("h3", null, `${description}`),
      React.createElement("p", {className: "price"}, `${price}`),
      React.createElement("p", {className: "quantity"}, `${quantity} left in stock`),
      React.createElement("div", {className: "actions product-actions", children: [
        React.createElement("a", {className: "button add-to-cart"}, "Add to Cart"),
        React.createElement("a", {className: "button edit"}, "Edit")
      ]}),
      React.createElement("a", {className: "delete-button", children: [
        React.createElement("span", null, "X")
      ]}),
    ]})
  )
}

// const productDesc= {
//   description: "Product 1",
//   price: "$100",
//   quantity: 5
// };
const rootElement = document.getElementById("root");
// ReactDOM.createRoot(rootElement).render(Product("Amazon Kindle", "79.99", "5"));
ReactDOM.createRoot(rootElement).render(<Product description="test" price="79.99" quantity="5" />);


export default Product