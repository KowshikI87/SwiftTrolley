import React from "react";

const AddForm = () => {
 return React.createElement('div', {
    className: "add-form",
    children: [
      React.createElement('p', null, React.createElement('a', { className: "button add-product-button" }, "Add a Product")),
      React.createElement('h3', null, "Add Product"),
      React.createElement('form', null, [
        React.createElement('div', { 
          className: "input-group",
          children: [
            React.createElement('label', { htmlFor: "product-name" }, "Product Name"),
            React.createElement('input', { type: "text", id: "product-name", defaultValue: "" })
          ]
        }),
        React.createElement('div', { 
          className: "input-group",
          children: [
            React.createElement('label', { htmlFor: "product-price" }, "Price"),
            React.createElement('input', { type: "text", id: "product-price", defaultValue: "" })
          ]
        }),
        React.createElement('div', { 
          className: "input-group",
          children: [
            React.createElement('label', { htmlFor: "product-quantity" }, "Quantity"),
            React.createElement('input', { type: "text", id: "product-quantity", defaultValue: "" })
          ]
        }),
        React.createElement('div', { 
          className: "actions form-actions",
          children: [
            React.createElement('a', { className: "button" }, "Add"),
            React.createElement('a', { className: "button" }, "Cancel")
          ]
        })
      ])
    ]
  });
}

export default AddForm;
