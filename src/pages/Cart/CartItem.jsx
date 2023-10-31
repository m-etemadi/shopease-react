import { useShopping } from '../../contexts/ShoppingContext';
import { formatCurrency } from '../../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/Button';

function CartItem({ item }) {
  const {
    removeFromCart,
    getCurrentQuantityById,
    getTotalPriceById,
    decreaseItemQuantity,
    increaseItemQuantity,
  } = useShopping();

  const { id, productName, price, productImage, totalQuantity } = item;

  const currentQuantity = getCurrentQuantityById(id);

  const isAvailable = currentQuantity < totalQuantity;

  const totalPrice = getTotalPriceById(id);

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
