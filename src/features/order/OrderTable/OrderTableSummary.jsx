import { formatCurrency } from '../../../utils/helpers';

function OrderTableSummary({ order }) {
  const { date, subtotal, fullName } = order;

  return (
    <div className="table-summary">
      <h2 className="heading-primary">Order details</h2>
      <div className="row">
        <div className="cell">Status</div>
        <div className="cell">
          <span className="green">Preparing</span>
        </div>
      </div>
      <div className="row">
        <div className="cell">Order placed</div>
        <div className="cell">{date}</div>
      </div>
      <div className="row">
        <div className="cell">Deliver to</div>
        <div className="cell">{fullName}</div>
      </div>
      <div className="row">
        <div className="cell">Subtotal</div>
        <div className="cell">{formatCurrency(subtotal)}</div>
      </div>
      <div className="row">
        <div className="cell">Shipping Fee</div>
        <div className="cell">Free</div>
      </div>
      <div className="row">
        <div className="cell">
          <strong>Total</strong>
        </div>
        <div className="cell">
          <strong>{formatCurrency(subtotal)}</strong>
        </div>
      </div>
    </div>
  );
}

export default OrderTableSummary;
