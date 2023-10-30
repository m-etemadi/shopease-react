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
    // decreaseItemQuantity,
    // increaseItemQuantity,
  } = useShopping();

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

  return (
    <div className="item">
      <img src={productImage} alt={productName} />
      <div className="item__details">
        <strong className="item-title">{productName}</strong>
        <div>
          <p>
            Price: <span>${price}</span>
          </p>
          <p>
            Total Price: <span>{cartItems[0].totalPrice}</span>
          </p>
          <div>
            {/* <Button onClick={() => decreaseItemQuantity(id)}>-</Button> */}
            <span>{currentQuantity}</span>
            {/* <Button onClick={() => increaseItemQuantity(id)}>+</Button> */}
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
