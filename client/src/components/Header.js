const Header = ({ total, numCartItems, onCheckout }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        {numCartItems == 0 ? <p>Your cart is empty</p> : null }
        <p>Total: ${total}</p>
        <a className={`button checkout ${numCartItems === 0 ? 'disabled' : ''}`} onClick={onCheckout}>Checkout</a>
      </div>
    </header>
  )
}

export default Header;