import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../../components/common/Button';

function OrderSuccess() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('orderId');
  const navigate = useNavigate();

  return (
    <div className="completed p-5">
      <p>Order Placed Successfully</p>
      <p>Order ID: #{id}</p>
      <Button className="btn" onClick={() => navigate('/')}>
        Back to Home Page
      </Button>
    </div>
  );
}

export default OrderSuccess;
