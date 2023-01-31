import React from "react";
import ReactDOM from "react-dom/client";

const Header = ( {total} ) => {
  return React.createElement("header", {children: [
    React.createElement("h1", null, "The Shop!"),
    React.createElement("div", {className: "cart", children:[
      React.createElement("h2", null, "Your Cart"),
      React.createElement("p", null, "Your cart is empty"),
      React.createElement("p", null, `Total : ${total}`),
      React.createElement("a", {className: "button checkout disabled"}, "Checkout"),
    ]})
  ]})
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<Header total="25" />);


export default Header

{/* <header>
  <h1>The Shop!</h1>
  <div class="cart">
    <h2>Your Cart</h2>
    <p>Your cart is empty</p>
    <p>Total: $0</p>
    <a class="button checkout disabled">Checkout</a>
  </div>
</header> */}