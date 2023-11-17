import { useCart } from '../../../contexts/CartContext';
import { getItemPropertyById } from '../../../utils/helpers';

import Button from '../../Common/Button/Button';

import styles from './CartQuantityControl.module.css';

function CartQuantityControl({ item }) {
  const { id, totalQuantity } = item;

  const { cartItems, increaseItemQuantity, decreaseItemQuantity } = useCart();

  const currentQuantity = getItemPropertyById(id, 'quantity', cartItems);
  const isAvailable = currentQuantity < totalQuantity;

  return (
    <>
      <Button
        type="quantity"
        onClick={() => decreaseItemQuantity(id, currentQuantity)}
      >
        -
      </Button>

      <span className={styles.quantity}>{currentQuantity}</span>

      {isAvailable && (
        <Button type="quantity" onClick={() => increaseItemQuantity(id)}>
          +
        </Button>
      )}
    </>
  );
}

export default CartQuantityControl;
