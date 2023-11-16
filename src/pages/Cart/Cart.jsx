import { useCart } from '../../contexts/CartContext';

import CartSummary from '../../components/Cart/CartSummary';
import Message from '../../components/Common/Message';
import CartTable from '../../components/Cart/CartTable/CartTable';

function Cart() {
  const { cartItems } = useCart();

  const cartLength = cartItems.length;

  return (
    <main className="cart p-5">
      <div className="container">
        <h2 className="page-title">Your cart items</h2>

        {cartLength > 0 ? (
          <CartTable />
        ) : (
          <Message message="Your cart is empty" />
        )}
        {cartLength > 0 && <CartSummary />}
      </div>
    </main>
  );
}

export default Cart;
