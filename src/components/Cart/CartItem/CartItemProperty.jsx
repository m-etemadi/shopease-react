import { useCart } from '../../../contexts/CartContext';
import { getItemPropertyById, formatCurrency } from '../../../utils/helpers';

function CartItemProperty({ item }) {
  const { id, productName, price } = item;

  const { cartItems } = useCart();

  const currentQuantity = getItemPropertyById(id, 'quantity', cartItems);
  const totalPrice = getItemPropertyById(id, 'totalPrice', cartItems);

  return (
    <div className="item__property">
      <strong className="item-title">{productName}</strong>
      <p>
        Item price: <span>{formatCurrency(price)}</span>
      </p>
      {currentQuantity > 1 && (
        <p>
          Total: <span>{formatCurrency(totalPrice)}</span>
        </p>
      )}
    </div>
  );
}

export default CartItemProperty;
