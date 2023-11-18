import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Products = lazy(() => import('./features/products/Products'));
const Login = lazy(() => import('./features/login/Login'));
const Cart = lazy(() => import('./features/cart/Cart'));
const Order = lazy(() => import('./features/order/Order'));

import ProtectedRoute from './route/ProtectedRoute';
import Checkout from './features/order/Checkout';

import Header from './ui/Header/Header';
import SpinnerFullPage from './ui/Common/SpinnerFullPage/SpinnerFullPage';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />

          <Route
            path="order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="checkout" />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
