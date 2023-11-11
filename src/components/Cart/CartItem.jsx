import { useCart } from '../../contexts/CartContext';
import { getItemPropertyById, formatCurrency } from '../../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from '../Common/Button';

function CartItem({ item }) {
  const {
    cartItems,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useCart();

  const { id, productName, price, productImage, totalQuantity } = item;

  const currentQuantity = getItemPropertyById(id, 'quantity', cartItems);
  const totalPrice = getItemPropertyById(id, 'totalPrice', cartItems);

  const isAvailable = currentQuantity < totalQuantity;

  function handleDelete() {
    removeFromCart(id);
  }

  return (
    <div className="item">
      <img src={productImage} alt={productName} />
      <div className="item__details">
        <strong className="item-title">{productName}</strong>
        <div className="details">
          <p>
            Item price: <span>{formatCurrency(price)}</span>
          </p>
          {currentQuantity > 1 && (
            <p>
              Total: <span>{formatCurrency(totalPrice)}</span>
            </p>
          )}
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
        </div>
        <Button className="btn-remove" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} size="xl" />
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
