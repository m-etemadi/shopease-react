import { useState } from 'react';

import { useCart } from '../../contexts/CartContext';
import { useOrder } from '../../contexts/OrderContext';
import { useAuth } from '../../contexts/FakeAuthContext';
import {
  calculateTotalByProperty,
  generateRandomID,
} from '../../utils/helpers';

import Button from '../../components/common/Button';

function Checkout() {
  const { user } = useAuth();
  const { cartItems, clearCart } = useCart();
  const { placeOrder } = useOrder();

  const { name, address, cardNum, cvv, expDate } = user;

  const totalQuantity = calculateTotalByProperty(cartItems, 'quantity');
  const subtotal = calculateTotalByProperty(cartItems, 'totalPrice');

  const [fullName, setFullName] = useState(name);
  const [mainAddress, setMainAddress] = useState(address);
  const [mainCard, setMainCard] = useState(cardNum);
  const [mainCvv, setMainCvv] = useState(cvv);
  const [mainExpDate, setMainExpDate] = useState(expDate);

  function handleCheckout(e) {
    e.preventDefault();

    const customerDetails = {
      fullName,
      mainAddress,
      mainCard,
      mainCvv,
      mainExpDate,
    };

    if (Object.values(customerDetails).some(field => !field)) {
      return;
    }

    const item = {
      id: generateRandomID(),
      subtotal,
      orderedItems: [...cartItems],
      customerDetails,
    };

    placeOrder(item);
    alert(`Order placed successfully! Order number: ${item.id}`);
    clearCart();
  }

  return (
    <section className="p-5">
      <div className="container">
        <h2 className="page-title">
          Checkout ({totalQuantity} {totalQuantity > 1 ? 'items' : 'item'})
        </h2>
        <div className="checkout">
          <form onSubmit={handleCheckout}>
            <div className="checkout-section">
              <h3>Full Name</h3>
              <div className="single-input">
                <input
                  type="text"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                />
              </div>
            </div>
            <div className="checkout-section">
              <h3>Delivery Address</h3>
              <div className="single-input">
                <input
                  type="text"
                  value={mainAddress}
                  onChange={e => setMainAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="checkout-section">
              <h3>Cart Details</h3>
              <div className="single-input">
                <input
                  type="text"
                  value={mainCard}
                  onChange={e => setMainCard(+e.target.value)}
                />
              </div>
              <div className="double-input">
                <input
                  type="text"
                  value={mainCvv}
                  onChange={e => setMainCvv(+e.target.value)}
                />
                <input
                  type="text"
                  value={mainExpDate}
                  onChange={e => setMainExpDate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Button className="btn" onClick={() => navigate('/cart')}>
                Go back
              </Button>
              <Button className="btn">Place order</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
