import { formatCurrency, reduceTitleLength } from '../../../utils/helpers';

function OrderTableRow({ item }) {
  const { image, price, title, quantity, totalPrice } = item;

  return (
    <div className="row">
      <div className="cell">
        <img src={image} alt={reduceTitleLength(title)} loading="lazy" />
      </div>
      <div className="cell">
        <strong>{reduceTitleLength(title)}</strong>
      </div>
      <div className="cell">
        <span>{formatCurrency(price)}</span>
      </div>
      <div className="cell">{quantity}</div>
      <div className="cell">
        <span>{formatCurrency(totalPrice)}</span>
      </div>
    </div>
  );
}

export default OrderTableRow;
