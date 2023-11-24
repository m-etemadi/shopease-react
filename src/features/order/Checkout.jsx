import { useState } from 'react';
import {
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { clearCart, calculateTotalByProperty } from '../cart/cartSlice';
import store from '../../store';

import ProtectedRoute from '../../route/ProtectedRoute';

import { createOrder } from '../../services/apiProducts';

import {
  formatDate,
  generateRandomID,
  cardDataValidation,
} from '../../utils/helpers';

import ActionButtons from '../../ui/Common/ActionButtons';
import Button from '../../ui/Common/Button/Button';
import Message from '../../ui/Common/Message';

import styles from './Order.module.css';

function Checkout() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const formErrors = useActionData();

  const isSubmitting = navigation.state === 'submitting';

  const user = useSelector(state => state.authentication.user);
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalQuantity = useSelector(calculateTotalByProperty('quantity'));
  const subtotal = useSelector(calculateTotalByProperty('totalPrice'));

  const orderedItems = [...cartItems];

  const [fullName, setFullName] = useState(user?.name);
  const [mainAddress, setMainAddress] = useState(user?.address);

  if (!cartItems.length) return <Message message="Your cart is empty" />;

  return (
    <ProtectedRoute>
      <div className="container-secondary">
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
              placeholder="Full Name"
              required
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
              placeholder="Delivery Address"
              required
            />
          </div>
          <div className={styles.checkoutSection}>
            <h3>Cart Details</h3>
            {formErrors?.cardNumber && <p>{formErrors.cardNumber}</p>}
            {formErrors?.cardCvv && <p>{formErrors.cardCvv}</p>}
            <input
              className="form-input"
              name="cardNumber"
              type="text"
              placeholder="Card Number"
              required
            />

            <div className={styles.doubleInput}>
              <input name="cardCvv" type="text" placeholder="CVV" required />
              <input
                name="cardExpiry"
                type="text"
                placeholder="Expiry"
                required
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
          <ActionButtons>
            <Button type="primary" onClick={() => navigate('/cart')}>
              Go back
            </Button>
            <Button type="primary">
              {isSubmitting ? 'Placing order...' : 'Place order'}
            </Button>
          </ActionButtons>
        </Form>
      </div>
    </ProtectedRoute>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    id: generateRandomID(),
    date: formatDate(Date.now()),
    orderedItems: JSON.parse(data.orderedItems),
    totalQuantity: JSON.parse(data.totalQuantity),
    subtotal: JSON.parse(data.subtotal),
  };

  const errors = {};

  if (!cardDataValidation(order.cardNumber)) {
    errors.cardNumber = 'Please insert your Card Number in correct format!';
  }
  if (!cardDataValidation(order.cardCvv)) {
    errors.cardCvv = 'Please insert your CVV in correct format!';
  }
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/my-orders/${newOrder.id}`);
}

export default Checkout;
