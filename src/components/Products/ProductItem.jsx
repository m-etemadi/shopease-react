import { useCart } from '../../contexts/CartContext';
import { getItemPropertyById, formatCurrency } from '../../utils/helpers';

import Button from '../common/Button';

import styles from './ProductItem.module.css';

function ProductItem({ product }) {
  const { id, productName, price, productImage, totalQuantity } = product;

  const { cartItems, addToCart } = useCart();

  const currentQuantity = getItemPropertyById(id, 'quantity', cartItems);
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
    <div className={styles.productItem}>
      <img src={productImage} alt={productName} />
      <div className={styles.info}>
        <h2>{productName}</h2>
        <span>{formatCurrency(price)}</span>
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
