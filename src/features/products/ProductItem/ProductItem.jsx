import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../../cart/cartSlice';

import { formatCurrency } from '../../../utils/helpers';

import Button from '../../../ui/Common/Button/Button';

import styles from './ProductItem.module.css';

function ProductItem({ product }) {
  const { id, productName, price, productImage, totalQuantity } = product;

  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));

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

    dispatch(addItem(item));
  }

  return (
    <div className={styles.productItem}>
      <img src={productImage} alt={productName} />
      <div className={styles.info}>
        <h2>{productName}</h2>
        <span>{formatCurrency(price)}</span>
      </div>
      <Button onClick={handleAddToCart} type={isInCart ? 'added' : 'primary'}>
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </Button>
    </div>
  );
}

export default ProductItem;
