import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Products, {
  loader as productsLoader,
} from './features/products/Products';
import Login from './features/Authentication/Login';
import Cart from './features/cart/Cart';
import Checkout, {
  action as createOrderAction,
} from './features/order/Checkout';
import MyOrders, {
  loader as allOrdersLoader,
} from './features/order/MyOrders/MyOrders';
import ViewOrder, {
  loader as orderLoader,
} from './features/order/ViewOrder/ViewOrder';

import Error from './ui/Common/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Products />,
        loader: productsLoader,
        errorElement: <Error />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order',
        element: <Navigate replace to="/order/checkout" />,
      },
      {
        path: '/order/checkout',
        element: <Checkout />,
        action: createOrderAction,
      },
      {
        path: '/my-orders',
        element: <MyOrders />,
        loader: allOrdersLoader,
        errorElement: <Error />,
      },
      {
        path: '/my-orders/:orderId',
        element: <ViewOrder />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
