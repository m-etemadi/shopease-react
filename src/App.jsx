import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/FakeAuthContext';

const Products = lazy(() => import('./pages/Products/Product'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Login = lazy(() => import('./pages/Login/Login'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Order = lazy(() => import('./pages/Order/Order'));

import ProtectedRoute from './route/ProtectedRoute';
import Checkout from './pages/Order/Checkout';

import Navbar from './components/common/Navbar/Navbar';
import SpinnerFullPage from './components/Common/SpinnerFullPage';
import { OrderProvider } from './contexts/OrderContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="contact" element={<Contact />} />
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
