import { useNavigate, useSearchParams } from 'react-router-dom';

import Button from '../../components/common/Button';

function OrderSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get('orderId');

  return (
    <div className="completed p-5">
      <p>Order Placed Successfully</p>
      <p>Order ID: #{id}</p>
      <Button className="btn" onClick={() => navigate('/')}>
        Back to product page
      </Button>
    </div>
  );
}

export default OrderSuccess;
