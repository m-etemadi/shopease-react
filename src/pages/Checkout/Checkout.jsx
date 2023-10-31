import { useShopping } from '../../contexts/ShoppingContext';

function Checkout() {
  const { totalQuantity } = useShopping();

  return (
    <section className="checkout p-5">
      <div className="container">
        <h2 className="page-title">
          Checkout ({totalQuantity} {totalQuantity > 1 ? 'items' : 'item'})
        </h2>
        <div className="checkout-section">
          <h3>Delivery Address</h3>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
