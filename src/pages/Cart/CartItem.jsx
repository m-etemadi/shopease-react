// import { useState } from 'react';
import { useShopping } from '../../contexts/ShoppingContext';
import Button from '../../components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function CartItem({ item }) {
  const { removeFromCart } = useShopping();
  const {
    id,
    productName,
    price,
    productImage,
    quantity,
    // originalQuantity,
  } = item;

  // function handleIncrease() {
  //   if (qty >= originalQuantity) return;
  //   setQty(e => e + 1);
  // }

  // function handleDecrease() {
  //   if (qty <= 1) return;
  //   setQty(e => e - 1);
  // }

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
            Quantity: <span>{quantity}</span>
          </p>
        </div>
        <Button className="btn-remove" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} size="xl" />
        </Button>
        {/* <div className="item-amount">
          <Button onClick={handleDecrease} className="btn-amount">
            -
          </Button>
          <input
            type="text"
            minLength={0}
            maxLength={quantity}
            value={qty}
            onChange={e => setQty(+e.target.value)}
          />
          <Button onClick={handleIncrease} className="btn-amount">
            +
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default CartItem;
