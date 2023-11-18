import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  calculateTotalById,
} from '../../../features/cart/cartSlice';

import { formatCurrency } from '../../../utils/helpers';

import Button from '../../../ui/Common/Button/Button';
import CartQuantityControl from '../CartQuantityControl/CartQuantityControl';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CartTable.module.css';

function CartTableRow({ item }) {
  const { id, productName, productImage, price } = item;

  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.cartItems);

  const totalPrice = useSelector(calculateTotalById(id));

  return (
    <div className={styles.row}>
      <div className={styles.cell}>
        <img src={productImage} alt={productName} />
      </div>
      <div className={styles.cell}>
        <strong>{productName}</strong>
      </div>
      <div className={styles.cell}>
        <span>{formatCurrency(price)}</span>
      </div>
      <div className={styles.cell}>
        <CartQuantityControl item={item} />
      </div>
      <div className={styles.cell}>
        <span>{formatCurrency(totalPrice)}</span>
      </div>
      <div className={styles.cell}>
        <Button type="remove" onClick={() => dispatch(removeItem(id))}>
          <FontAwesomeIcon icon={faTrash} size="xl" />
        </Button>
      </div>
    </div>
  );
}

export default CartTableRow;
