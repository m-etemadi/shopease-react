import { useCart } from '../../../contexts/CartContext';
import { getItemPropertyById } from '../../../utils/helpers';

import Button from '../../Common/Button';

import styles from './CartQuantityControl.module.css';

function CartQuantityControl({ item }) {
  const { id, totalQuantity } = item;

  const { cartItems, increaseItemQuantity, decreaseItemQuantity } = useCart();

  const currentQuantity = getItemPropertyById(id, 'quantity', cartItems);
  const isAvailable = currentQuantity < totalQuantity;

  return (
    <>
      <Button
        className={`btn ${styles.btnQuantity}`}
        onClick={() => decreaseItemQuantity(id, currentQuantity)}
      >
        -
      </Button>
      <span className={styles.quantity}>{currentQuantity}</span>
      {isAvailable && (
        <Button
          className={`btn ${styles.btnQuantity}`}
          onClick={() => increaseItemQuantity(id)}
        >
          +
        </Button>
      )}
    </>
  );
}

export default CartQuantityControl;
