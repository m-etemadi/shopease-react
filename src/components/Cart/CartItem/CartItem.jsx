import { useCart } from '../../../contexts/CartContext';

import Button from '../../Common/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CartDetails from './CartDetails';

function CartItem({ item }) {
  const { removeFromCart } = useCart();

  const { id, productName, productImage } = item;

  function handleDelete() {
    removeFromCart(id);
  }

  return (
    <div className="item">
      <img src={productImage} alt={productName} />
      <div className="item__details">
        <strong className="item-title">{productName}</strong>

        <CartDetails item={item} />

        <Button className="btn-remove" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} size="xl" />
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
