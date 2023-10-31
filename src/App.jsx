import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShoppingProvider } from './contexts/ShoppingContext';

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Home/Homepage';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ShoppingProvider>
  );
}

export default App;
