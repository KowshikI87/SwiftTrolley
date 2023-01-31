import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./header";
// import Product from "./product";
import AddForm from "./components/AddForm"

const App = () => {
  return React.createElement('div', {
    id: "app",
    children: [
      // React.createElement(Header),
      // React.createElement(Product),
      React.createElement(AddForm)
    ]
  });
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(App())