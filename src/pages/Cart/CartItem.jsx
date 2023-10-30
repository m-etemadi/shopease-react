// import { useState } from 'react';
import { useShopping } from '../../contexts/ShoppingContext';
import Button from '../../components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function CartItem({ item }) {
  const {
    cartItems,
    removeFromCart,
    getCurrentQuantityById,
    decreaseItemQuantity,
    increaseItemQuantity,
  } = useShopping();

  const { totalPrice } = cartItems.at(0);

  const { id, productName, price, productImage, totalQuantity } = item;

  const currentQuantity = getCurrentQuantityById(id);

  const options = [];
  for (let i = 1; i <= totalQuantity; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  function handleDelete(e) {
    e.preventDefault();
    removeFromCart(id);
  }

  if (currentQuantity < 1) return;

  return (
    <div className="item">
      <img src={productImage} alt={productName} />
      <div className="item__details">
        <strong className="item-title">{productName}</strong>
        <div>
          <p>
            Item price: <span>${price}</span>
          </p>
          {currentQuantity > 1 && (
            <p>
              Total price: <span>${totalPrice}</span>
            </p>
          )}
          <div>
            <Button onClick={() => decreaseItemQuantity(id, currentQuantity)}>
              -
            </Button>
            <span>{currentQuantity}</span>
            <Button onClick={() => increaseItemQuantity(id)}>+</Button>
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
