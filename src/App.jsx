import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShoppingProvider } from './contexts/ShoppingContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Home/Homepage';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Successful from './pages/Successful/Successful';
import Order from './pages/Order/Order';

function App() {
  return (
    <ShoppingProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
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
              <Route index element={<Checkout />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="successful" element={<Successful />} />
              <Route path="successful/:orderId" element={<Successful />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ShoppingProvider>
  );
}

export default App;
