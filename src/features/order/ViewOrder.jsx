import { useLoaderData } from 'react-router-dom';

import { getOrder } from '../../services/apiProducts';

import OrderTable from './OrderTable/OrderTable';
import OrderTableSummary from './OrderTable/OrderTableSummary';

function ViewOrder() {
  const order = useLoaderData();

  const { id, orderedItems, subtotal } = order;

  return (
    <div className="container">
      <h2 className="heading-primary">Order ID: #{id}</h2>

      <OrderTable orderedItems={orderedItems} />

      <OrderTableSummary subtotal={subtotal} />
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default ViewOrder;
