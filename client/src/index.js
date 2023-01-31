import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Product from "./components/Product";
// import AddForm from "./add_form";


// const App = () => {
//   return React.createElement('div', {
//     id: "app",
//     children: [
//       React.createElement(Header),
//       React.createElement(Product),
//       React.createElement(AddForm)
//     ]
//   });
// }

const App = () => {
  return (
    <div>
      <Header total={50} />
      <Product description={"Test Product"} price={"$79.99"} quantity={5} disabled={false} />
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(App())