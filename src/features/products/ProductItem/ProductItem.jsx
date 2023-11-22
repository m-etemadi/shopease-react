import { useDispatch, useSelector } from 'react-redux';
import { addItem, getPropertyById } from '../../cart/cartSlice';

import { formatCurrency, reduceTitleLength } from '../../../utils/helpers';

import Button from '../../../ui/Common/Button/Button';

import styles from './ProductItem.module.css';

function ProductItem({ product }) {
  const { id, title, price, image } = product;

  const dispatch = useDispatch();

  const currentQuantity = useSelector(getPropertyById(id, 'quantity'));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const item = {
      id,
      title,
      price,
      image,
      quantity: 1,
      totalPrice: price * 1,
      totalQuantity: 10,
    };

    dispatch(addItem(item));
  }

  return (
    <div className={styles.productItem}>
      <img src={image} alt={reduceTitleLength(title)} loading="lazy" />
      <div className={styles.info}>
        <h2>{reduceTitleLength(title)}</h2>
        <span>{formatCurrency(price)}</span>
      </div>
      <Button onClick={handleAddToCart} type={isInCart ? 'added' : 'primary'}>
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </Button>
    </div>
  );
}

export default ProductItem;
