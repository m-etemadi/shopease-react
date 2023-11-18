import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../../features/cart/cartSlice';
import { getItemPropertyById } from '../../../utils/helpers';

import Button from '../../../ui/Common/Button/Button';

import styles from './CartQuantityControl.module.css';

function CartQuantityControl({ item }) {
  const { id, totalQuantity } = item;

  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const currentQuantity = getItemPropertyById(id, 'quantity', cartItems);
  const isAvailable = currentQuantity < totalQuantity;

  return (
    <>
      <Button
        type="quantity"
        onClick={() => dispatch(decreaseItemQuantity(id, currentQuantity))}
      >
        -
      </Button>

      <span className={styles.quantity}>{currentQuantity}</span>

      {isAvailable && (
        <Button
          type="quantity"
          onClick={() => dispatch(increaseItemQuantity(id))}
        >
          +
        </Button>
      )}
    </>
  );
}

export default CartQuantityControl;
