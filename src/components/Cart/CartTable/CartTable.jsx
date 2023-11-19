import { useCart } from '../../../contexts/CartContext';

import CartTableHeader from './CartTableHeader';
import CartTableRow from './CartTableRow';

import styles from './CartTable.module.css';

function CartTable() {
  const { cartItems } = useCart();

  return (
    <div className={styles.cartTable}>
      <CartTableHeader />

      {cartItems.map(item => (
        <CartTableRow key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartTable;
