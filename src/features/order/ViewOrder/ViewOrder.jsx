import { useLoaderData, useNavigate } from 'react-router-dom';

import ProtectedRoute from '../../../route/ProtectedRoute';

import { getOrder } from '../../../services/apiProducts';

import ViewOrderTable from './ViewOrderTable/ViewOrderTable';
import ViewOrderSummary from './ViewOrderSummary';
import ActionButtons from '../../../ui/Common/ActionButtons';
import Button from '../../../ui/Common/Button/Button';

function ViewOrder() {
  const navigate = useNavigate();
  const order = useLoaderData();

  const { id, orderedItems } = order;

  return (
    <ProtectedRoute>
      <div className="container-primary">
        <h2 className="heading-primary">Order ID: #{id}</h2>

        <ViewOrderTable orderedItems={orderedItems} />

        <ViewOrderSummary order={order} />

        <ActionButtons>
          <Button type="primary" onClick={() => navigate('/my-orders')}>
            My orders
          </Button>
        </ActionButtons>
      </div>
    </ProtectedRoute>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default ViewOrder;
