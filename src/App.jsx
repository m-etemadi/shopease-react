// import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

// const Products = lazy(() => import('./features/products/Products'));
// const Login = lazy(() => import('./features/login/Login'));
// const Cart = lazy(() => import('./features/cart/Cart'));
// const Order = lazy(() => import('./features/order/Order'));

import AppLayout from './ui/AppLayout';
import Products, {
  loader as productsLoader,
} from './features/products/Products';
import Login from './features/Login/Login';
import Cart from './features/cart/Cart';
import Checkout from './features/Order/Checkout';
import MyOrders from './features/order/MyOrders';
import ViewOrder from './features/order/ViewOrder';

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
      },
      {
        path: '/my-orders',
        element: <MyOrders />,
      },
      {
        path: '/my-orders/:orderId',
        element: <ViewOrder />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
