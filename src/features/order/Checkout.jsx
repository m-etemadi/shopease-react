import { useEffect, useState } from 'react';
import { Form, redirect, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { calculateTotalByProperty } from '../cart/cartSlice';

import { createOrder } from '../../services/apiProducts';

import { generateRandomID } from '../../utils/helpers';

import Button from '../../ui/Common/Button/Button';

import styles from './Order.module.css';

function Checkout() {
  const navigate = useNavigate();

  const user = useSelector(state => state.authentication.user);
  const isAuthenticated = useSelector(
    state => state.authentication.isAuthenticated
  );
  const cartItems = useSelector(state => state.cart.cartItems);

  const cartLength = cartItems.length;

  const totalQuantity = useSelector(calculateTotalByProperty('quantity'));
  const subtotal = useSelector(calculateTotalByProperty('totalPrice'));

  const [fullName, setFullName] = useState(user?.name);
  const [mainAddress, setMainAddress] = useState(user?.address);
  const [mainCard, setMainCard] = useState(user?.cardNum);
  const [mainCvv, setMainCvv] = useState(user?.cvv);
  const [mainExpDate, setMainExpDate] = useState(user?.expDate);

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
    if (!cartLength && isAuthenticated) navigate('/');
  }, [cartLength, isAuthenticated, navigate]);

  if (!cartLength || !isAuthenticated) return null;

  const orderedItems = [...cartItems];

  return (
    <div className="container">
      <h2 className="heading-primary">
        Checkout ({totalQuantity} {totalQuantity > 1 ? 'items' : 'item'})
      </h2>

      <Form method="POST" className={styles.ordersContainer}>
        <div className={styles.checkoutSection}>
          <h3>Full Name</h3>
          <input
            className="form-input"
            name="fullName"
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
        </div>
        <div className={styles.checkoutSection}>
          <h3>Delivery Address</h3>
          <input
            className="form-input"
            name="address"
            type="text"
            value={mainAddress}
            onChange={e => setMainAddress(e.target.value)}
          />
        </div>
        <div className={styles.checkoutSection}>
          <h3>Cart Details</h3>
          <input
            className="form-input"
            name="cardNumber"
            type="text"
            value={mainCard}
            onChange={e => setMainCard(+e.target.value)}
          />
          <div className={styles.doubleInput}>
            <input
              name="cardCvv"
              type="text"
              value={mainCvv}
              onChange={e => setMainCvv(+e.target.value)}
            />
            <input
              name="cardExpiry"
              type="text"
              value={mainExpDate}
              onChange={e => setMainExpDate(e.target.value)}
            />

            <input
              type="hidden"
              name="orderedItems"
              value={JSON.stringify(orderedItems)}
            />
            <input
              type="hidden"
              name="totalQuantity"
              value={JSON.stringify(totalQuantity)}
            />
            <input
              type="hidden"
              name="subtotal"
              value={JSON.stringify(subtotal)}
            />
          </div>
        </div>
        <div className={styles.checkoutActions}>
          <Button type="primary" onClick={() => navigate('/cart')}>
            Go back
          </Button>
          <Button type="primary">Place order</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    id: generateRandomID(),
    orderedItems: JSON.parse(data.orderedItems),
    totalQuantity: JSON.parse(data.totalQuantity),
    subtotal: JSON.parse(data.subtotal),
  };

  const newOrder = await createOrder(order);

  return redirect(`/my-orders/${newOrder.id}`);
}

export default Checkout;
