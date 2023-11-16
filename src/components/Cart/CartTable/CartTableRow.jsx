import { useCart } from '../../../contexts/CartContext';
import { formatCurrency, getItemPropertyById } from '../../../utils/helpers';

import Button from '../../Common/Button';
import CartQuantityControl from '../CartQuantityControl/CartQuantityControl';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CartTable.module.css';

function CartTableRow({ item }) {
  const { cartItems, removeFromCart } = useCart();

  const { id, productName, productImage, price } = item;

  const totalPrice = getItemPropertyById(id, 'totalPrice', cartItems);

  function handleDelete() {
    removeFromCart(id);
  }

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
        <Button className="btn-remove" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} size="xl" />
        </Button>
      </div>
    </div>
  );
}

export default CartTableRow;
