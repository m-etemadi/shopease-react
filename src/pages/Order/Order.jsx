import { Outlet } from 'react-router-dom';
import { OrderProvider } from '../../contexts/OrderContext';

function Order() {
  return (
    <OrderProvider>
      <Outlet />
    </OrderProvider>
  );
}

export default Order;
