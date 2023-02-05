const CartItems = ({ cartItems, total }) => {
  return (
    <table className="cart-items">
    <tbody>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      {cartItems.map(cartItem => {
        return (<tr key={cartItem._id}>
          <th>{cartItem.title}</th>
          <th>{cartItem.quantity}</th>
          <th>${cartItem.price}</th>
        </tr>)
        })
      }
      <tr>
        <td colSpan="3" className="total">
          Total: ${total}
        </td>
      </tr>
    </tbody>
  </table>
  )
}

export default CartItems;