import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/helpers';

import Button from '../common/Button';

function ProductItem({ product }) {
  const { id, productName, price, productImage, totalQuantity } = product;

  const { addToCart, getCurrentQuantityById } = useCart();

  const currentQuantity = getCurrentQuantityById(id);

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const item = {
      id,
      productName,
      price,
      productImage,
      quantity: 1,
      totalPrice: price * 1,
      totalQuantity,
    };

    addToCart(item);
  }

  return (
    <div className="product-cart">
      <img src={productImage} alt={productName} />
      <div className="product-cart__details">
        <strong>{productName}</strong>
        <p>{formatCurrency(price)}</p>
      </div>
      <Button
        onClick={handleAddToCart}
        className={`btn ${isInCart ? 'added' : ''}`}
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </Button>
    </div>
  );
}

export default ProductItem;
