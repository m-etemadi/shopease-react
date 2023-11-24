import { Link } from 'react-router-dom';

import styles from '../../Order.module.css';

function MyOrdersTableRow({ item }) {
  const { id, date, fullName, subtotal } = item;

  return (
    <Link to={`/my-orders/${id}`}>
      <div className="row">
        <div className="cell">{id}</div>
        <div className="cell">{date}</div>
        <div className="cell">{fullName}</div>
        <div className="cell">{subtotal}</div>
      </div>
    </Link>
  );
}

export default MyOrdersTableRow;
