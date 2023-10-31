import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShopping } from '../../contexts/ShoppingContext';
import { useAuth } from '../../contexts/FakeAuthContext';

import Button from '../../components/Button';
import Completed from '../Completed/Completed';

function Checkout() {
  const { user } = useAuth();

  const { name, address, suburb, state, code, cardNum, cvv, expDate } = user;

  const { totalQuantity, placeOrder, isPlaced } = useShopping();

  const navigate = useNavigate();
  const [fullName, setFullName] = useState(name);
  const [mainAddress, setMainAddress] = useState(address);
  const [mainSuburb, setMainSuburb] = useState(suburb);
  const [mainState, setMainState] = useState(state);
  const [mainCode, setMainCode] = useState(code);
  const [mainCard, setMainCard] = useState(cardNum);
  const [mainCvv, setMainCvv] = useState(cvv);
  const [mainExpDate, setMainExpDate] = useState(expDate);

  return (
    <section className="p-5">
      <div className="container">
        {!isPlaced ? (
          <>
            <h2 className="page-title">
              Checkout ({totalQuantity} {totalQuantity > 1 ? 'items' : 'item'})
            </h2>
            <div className="checkout">
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
                <div className="single-input">
                  <input
                    type="text"
                    value={mainSuburb}
                    onChange={e => setMainSuburb(e.target.value)}
                  />
                </div>
                <div className="double-input">
                  <input
                    type="text"
                    value={mainState}
                    onChange={e => setMainState(e.target.value)}
                  />
                  <input
                    type="text"
                    value={mainCode}
                    onChange={e => setMainCode(e.target.value)}
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
                <Button className="btn" onClick={() => navigate(-1)}>
                  Go back
                </Button>
                <Button className="btn" onClick={placeOrder}>
                  Place order
                </Button>
              </div>
            </div>
          </>
        ) : (
          <Completed />
        )}
      </div>
    </section>
  );
}

export default Checkout;
