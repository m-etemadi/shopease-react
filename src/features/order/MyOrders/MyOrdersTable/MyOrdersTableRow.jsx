import { Link } from 'react-router-dom';

import styles from '../../Order.module.css';

function MyOrdersTableRow({ item }) {
  const { id, date, fullName, subtotal } = item;

  return (
    <Link to={`/my-orders/${item.id}`}>
      <div className={styles.row}>
        <div className={styles.cell}>{id}</div>
        <div className={styles.cell}>{date}</div>
        <div className={styles.cell}>{fullName}</div>
        <div className={styles.cell}>{subtotal}</div>
      </div>
    </Link>
  );
}

export default MyOrdersTableRow;
