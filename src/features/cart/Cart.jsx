import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from './cartSlice';

import CartTable from './CartTable/CartTable';
import CartSummary from './CartSummary';
import ActionButtons from '../../ui/Common/ActionButtons';
import Button from '../../ui/Common/Button/Button';
import Message from '../../ui/Common/Message';

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    state => state.authentication.isAuthenticated
  );
  const cartLength = useSelector(state => state.cart.cartItems).length;

  function handleCheckout() {
    isAuthenticated
      ? navigate('/order/checkout')
      : navigate('/login?destination=checkout');
  }

  return (
    <div className="container-primary">
      <h2 className="heading-primary">Your cart items</h2>

      {cartLength > 0 ? (
        <>
          <CartTable />

          <CartSummary />

          <ActionButtons>
            <Button type="primary" onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
            <Button type="primary" onClick={handleCheckout}>
              Checkout
            </Button>
            <Button type="primary" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </Button>
          </ActionButtons>
        </>
      ) : (
        <Message message="Your cart is empty" />
      )}
    </div>
  );
}

export default Cart;
