import { useCart } from '../../../contexts/CartContext';
import { getItemPropertyById } from '../../../utils/helpers';

import Button from '../../common/Button';

function QuantityControl({ item }) {
  const { id, totalQuantity } = item;

  const { cartItems, increaseItemQuantity, decreaseItemQuantity } = useCart();

  const currentQuantity = getItemPropertyById(id, 'quantity', cartItems);
  const isAvailable = currentQuantity < totalQuantity;

  return (
    <div>
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

export default QuantityControl;
