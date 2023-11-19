import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/FakeAuthContext';

const Products = lazy(() => import('./pages/Products/Products'));
const Login = lazy(() => import('./pages/Login/Login'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Order = lazy(() => import('./pages/Order/Order'));

import ProtectedRoute from './route/ProtectedRoute';
import Checkout from './pages/Order/Checkout';

import Header from './components/Header/Header';
import SpinnerFullPage from './components/Common/SpinnerFullPage/SpinnerFullPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
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
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
