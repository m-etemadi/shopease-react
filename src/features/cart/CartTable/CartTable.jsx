import { useSelector } from 'react-redux';

import CartTableHeader from './CartTableHeader';
import CartTableRow from './CartTableRow';

import styles from './CartTable.module.css';

function CartTable() {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className={styles.cartTable}>
      <CartTableHeader removeCell={true} />

      {cartItems.map(item => (
        <CartTableRow key={item.id} item={item} removeCell={true} />
      ))}
    </div>
  );
}

export default CartTable;
