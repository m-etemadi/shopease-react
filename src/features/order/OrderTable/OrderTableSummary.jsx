import { useNavigate } from 'react-router-dom';

import { formatCurrency } from '../../../utils/helpers';

import Button from '../../../ui/Common/Button/Button';

function OrderTableSummary({ subtotal }) {
  const navigate = useNavigate();
  return (
    <div className="table-summary">
      <h2 className="heading-primary">Order totals</h2>
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
      <div className="table-summary-actions">
        <Button type="primary" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </div>
    </div>
  );
}

export default OrderTableSummary;
