import { useSelector } from 'react-redux';

import CartTableHeader from './CartTableHeader';
import CartTableRow from './CartTableRow';

function CartTable() {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className="table">
      <CartTableHeader />

      {cartItems.map(item => (
        <CartTableRow key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartTable;
