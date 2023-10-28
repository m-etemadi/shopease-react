import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShopping } from '../../contexts/ShoppingContext';

import Button from '../Button';

function ProductItem({ product }) {
  const [qty, setQty] = useState(1);

  const { id, productName, price, productImage, quantity } = product;

  const { addToCart } = useShopping();
  const navigate = useNavigate();

  const options = [];
  for (let i = 1; i <= quantity; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (qty > quantity) return;

    const item = {
      id,
      productName,
      price,
      totalPrice: price * qty,
      productImage,
      quantity: qty,
      // originalQuantity: quantity,
    };

    addToCart(item);
    navigate('/cart');
  }

  return (
    <div className="product-cart">
      <form onSubmit={handleSubmit}>
        <img src={productImage} alt={productName} />
        <div className="product-cart__details">
          <strong>{productName}</strong>
          <p>${price}</p>
          <p>
            <span>Quantity: </span>
            <select value={qty} onChange={e => setQty(+e.target.value)}>
              {options}
            </select>
          </p>
        </div>
        <Button className="btn">Add to Cart</Button>
      </form>
    </div>
  );
}

export default ProductItem;
