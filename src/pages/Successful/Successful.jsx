import { useNavigate } from 'react-router-dom';
import { useShopping } from '../../contexts/ShoppingContext';

import Button from '../../components/Button';

function Completed() {
  const { placedOrders } = useShopping();

  const orderId = placedOrders.at(0)?.orderId;

  const navigate = useNavigate();

  return (
    <div className="completed p-5">
      <p>Order Placed Successfully</p>
      <p>Order ID: {orderId}</p>
      <Button className="btn" onClick={() => navigate('/')}>
        Back to Home Page
      </Button>
    </div>
  );
}

export default Completed;
