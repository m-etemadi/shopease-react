import { useCart } from '../../contexts/CartContext';

import CartItem from '../../components/Cart/CartItem';
import CartSummary from '../../components/Cart/CartSummary';
import Message from '../../components/Common/Message';

function Cart() {
  const { cartItems } = useCart();

  const cartLength = cartItems.length;

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
              <CartSummary />
            </>
          ) : (
            <Message message="Your cart is empty" />
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
