import { useCart } from '../../../contexts/CartContext';
import { getItemPropertyById } from '../../../utils/helpers';

import Button from '../../Common/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function CartItemControl({ item }) {
  const { id, totalQuantity } = item;

  const {
    cartItems,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useCart();

  const currentQuantity = getItemPropertyById(id, 'quantity', cartItems);
  const isAvailable = currentQuantity < totalQuantity;

  function handleDelete() {
    removeFromCart(id);
  }

  return (
    <div className="item-control">
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

      <Button className="btn-remove" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} size="xl" />
      </Button>
    </div>
  );
}

export default CartItemControl;
