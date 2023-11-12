import { useCart } from '../../../contexts/CartContext';
import { getItemPropertyById, formatCurrency } from '../../../utils/helpers';

import QuantityControl from './QuantityControl';

function CartDetails({ item }) {
  const { id, price } = item;

  const { cartItems } = useCart();

  const currentQuantity = getItemPropertyById(id, 'quantity', cartItems);
  const totalPrice = getItemPropertyById(id, 'totalPrice', cartItems);

  return (
    <div className="details">
      <p>
        Item price: <span>{formatCurrency(price)}</span>
      </p>
      {currentQuantity > 1 && (
        <p>
          Total: <span>{formatCurrency(totalPrice)}</span>
        </p>
      )}
      <QuantityControl item={item} />
    </div>
  );
}

export default CartDetails;
