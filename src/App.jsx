import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShoppingProvider } from './contexts/ShoppingContext';

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Home/Homepage';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ShoppingProvider>
  );
}

export default App;
