import CartItems from "./CartItems";

const Header = ({ total, cartItems, onCheckout }) => {
  console.log("about to render cartItems", {cartItems});
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length == 0 ? <p>Your cart is empty</p> : null }
        {cartItems.length == 0 ? null : <CartItems cartItems={cartItems} total={total} />}
        {cartItems.length == 0 ? <p>Total: ${total}</p> : null}
        <a className={`button checkout ${cartItems.length === 0 ? 'disabled' : ''}`} onClick={onCheckout}>Checkout</a>
      </div>
    </header>
  )
}

export default Header;