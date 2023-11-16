import { useCart } from '../../../contexts/CartContext';
import { formatCurrency, getItemPropertyById } from '../../../utils/helpers';

import Button from '../../Common/Button';
import CartQuantityControl from '../CartQuantityControl';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartTableRow({ item }) {
  const { cartItems, removeFromCart } = useCart();

  const { id, productName, productImage, price } = item;

  const totalPrice = getItemPropertyById(id, 'totalPrice', cartItems);

  function handleDelete() {
    removeFromCart(id);
  }

  return (
    <div className="row">
      <div className="cell">
        <img src={productImage} alt={productName} />
      </div>
      <div className="cell">{productName}</div>
      <div className="cell">{formatCurrency(price)}</div>
      <div className="cell">
        <CartQuantityControl item={item} />
      </div>
      <div className="cell">{formatCurrency(totalPrice)}</div>
      <div className="cell">
        <Button className="btn-remove" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} size="xl" />
        </Button>
      </div>
    </div>
  );
}

export default CartTableRow;
