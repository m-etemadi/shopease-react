import { useCart } from '../../contexts/CartContext';
import { getItemPropertyById } from '../../utils/helpers';

import Button from '../Common/Button';

function CartQuantityControl({ item }) {
  const { id, totalQuantity } = item;

  const { cartItems, increaseItemQuantity, decreaseItemQuantity } = useCart();

  const currentQuantity = getItemPropertyById(id, 'quantity', cartItems);
  const isAvailable = currentQuantity < totalQuantity;

  return (
    <div className="item-control">
      <Button
        className="btn btn-quantity"
        onClick={() => decreaseItemQuantity(id, currentQuantity)}
      >
        -
      </Button>
      <span className="quantity">{currentQuantity}</span>
      {isAvailable && (
        <Button
          className="btn btn-quantity"
          onClick={() => increaseItemQuantity(id)}
        >
          +
        </Button>
      )}
    </div>
  );
}

export default CartQuantityControl;
