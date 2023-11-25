import { useLoaderData } from 'react-router-dom';

import { getAllOrders } from '../../../services/apiProducts';

import ProtectedRoute from '../../../route/ProtectedRoute';

import SearchOrders from '../SearchOrders';
import MyOrdersTable from './MyOrdersTable/MyOrdersTable';
import Message from '../../../ui/Common/Message';

function MyOrders() {
  const orders = useLoaderData();

  return (
    <ProtectedRoute>
      <div className="container-secondary">
        <h2 className="heading-primary">My orders</h2>

        <SearchOrders />

        {orders.length > 0 ? (
          <MyOrdersTable orders={orders} />
        ) : (
          <Message message="There are no orders available to show" />
        )}
      </div>
    </ProtectedRoute>
  );
}

export async function loader() {
  const orders = await getAllOrders();
  return orders;
}

export default MyOrders;
