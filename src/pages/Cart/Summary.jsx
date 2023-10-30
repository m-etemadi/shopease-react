import { useShopping } from '../../contexts/ShoppingContext';
import { useNavigate } from 'react-router';

import Button from '../../components/Button';

function Summary() {
  const { subtotal } = useShopping();
  const navigate = useNavigate();

  return (
    <div className="cart-summary">
      <p>
        Subtotal: <strong className="red">${subtotal}</strong>
      </p>
      <div>
        <Button className="btn" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
        <Button className="btn">Go to Cart</Button>
      </div>
    </div>
  );
}

export default Summary;
