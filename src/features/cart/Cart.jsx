import { useSelector } from 'react-redux';

import CartTable from '../cart/CartTable/CartTable';
import CartSummary from '../cart/CartSummary';
import Message from '../../ui/Common/Message';

function Cart() {
  const cartLength = useSelector(state => state.cart.cartItems).length;

  return (
    <div className="container-primary">
      <h2 className="heading-primary">Your cart items</h2>

      {cartLength > 0 ? (
        <CartTable />
      ) : (
        <Message message="Your cart is empty" />
      )}
      {cartLength > 0 && <CartSummary />}
    </div>
  );
}

export default Cart;
