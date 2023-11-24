import MyOrdersTableHeader from './MyOrdersTableHeader';
import MyOrdersTableRow from './MyOrdersTableRow';

import styles from '../../Order.module.css';

function MyOrdersTable({ orders }) {
  return (
    <div className={styles.orderHistory}>
      <MyOrdersTableHeader />

      {orders.map(item => (
        <MyOrdersTableRow key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MyOrdersTable;
