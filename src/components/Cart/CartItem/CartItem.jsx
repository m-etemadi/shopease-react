import CartItemProperty from './CartItemProperty';
import CartItemControl from './CartItemControl';

function CartItem({ item }) {
  const { productName, productImage } = item;

  return (
    <div className="item">
      <img src={productImage} alt={productName} />

      <div className="item__details">
        <CartItemProperty item={item} />
        <CartItemControl item={item} />
      </div>
    </div>
  );
}

export default CartItem;
