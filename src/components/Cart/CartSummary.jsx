import { useShopping } from '../../contexts/ShoppingContext';
import { useAuth } from '../../contexts/FakeAuthContext';
import { formatCurrency } from '../../utils/helpers';
import { useNavigate } from 'react-router';

import Button from '../Common/Button';

function CartSummary() {
  const { subtotal, clearCart } = useShopping();
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  function handleCheckout() {
    isAuthenticated
      ? navigate('/order/checkout')
      : navigate('/login?destination=checkout');
  }

  return (
    <div className="cart-summary">
      <p>
        Subtotal: <strong className="red">{formatCurrency(subtotal)}</strong>
      </p>
      <div>
        <Button className="btn" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
        <Button className="btn" onClick={handleCheckout}>
          Checkout
        </Button>
        <Button className="btn" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default CartSummary;
