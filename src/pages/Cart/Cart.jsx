import { useShopping } from '../../contexts/ShoppingContext';

import CartItem from './CartItem';
import Summary from './Summary';

function Cart() {
  const { cartItems, cartLength } = useShopping();

  return (
    <section className="cart p-5">
      <div className="container">
        <h2 className="page-title">Your cart items</h2>

        <div className="cart-items">
          {cartLength > 0 ? (
            <>
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              <Summary />
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
