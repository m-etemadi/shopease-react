import { useShopping } from '../../contexts/ShoppingContext';
import { formatCurrency } from '../../utils/helpers';
import { useNavigate } from 'react-router';

import Button from '../../components/Button';

function Summary() {
  const { subtotal, clearCart } = useShopping();
  const navigate = useNavigate();

  return (
    <div className="cart-summary">
      <p>
        Subtotal: <strong className="red">{formatCurrency(subtotal)}</strong>
      </p>
      <div>
        <Button className="btn" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
        <Button className="btn" onClick={() => navigate('/checkout')}>
          Checkout
        </Button>
        <Button className="btn" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Summary;
