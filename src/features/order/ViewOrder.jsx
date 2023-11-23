import { useLoaderData } from 'react-router-dom';

import { getOrder } from '../../services/apiProducts';

import ProtectedRoute from '../../route/ProtectedRoute';

import OrderTable from './OrderTable/OrderTable';
import OrderTableSummary from './OrderTable/OrderTableSummary';

function ViewOrder() {
  const order = useLoaderData();

  const { id, orderedItems } = order;

  return (
    <ProtectedRoute>
      <div className="container">
        <h2 className="heading-primary">Order ID: #{id}</h2>

        <OrderTable orderedItems={orderedItems} />

        <OrderTableSummary order={order} />
      </div>
    </ProtectedRoute>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default ViewOrder;
