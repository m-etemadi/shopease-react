import styles from '../../Order.module.css';

function MyOrdersTableHeader() {
  return (
    <div className="row header">
      <div className="cell">Order ID</div>
      <div className="cell">Date</div>
      <div className="cell">Deliver to</div>
      <div className="cell">Total</div>
    </div>
  );
}

export default MyOrdersTableHeader;
