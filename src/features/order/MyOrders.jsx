import { Link, useLoaderData } from 'react-router-dom';

import { getAllOrders } from '../../services/apiProducts';

import styles from './Order.module.css';

function MyOrders() {
  const order = useLoaderData();

  return (
    <div className="container">
      <h2 className="heading-primary">My orders</h2>

      {order ? (
        <div className={styles.orderHistory}>
          <div className={`${styles.row} ${styles.header}`}>
            <div className={styles.cell}>ORDER ID</div>
            <div className={styles.cell}>DATE</div>
            <div className={styles.cell}>DelIVER TO</div>
            <div className={styles.cell}>TOTAL</div>
          </div>
          {order.map(item => (
            <Link to={`/my-orders/${item.id}`} key={item.id}>
              <div className={styles.row}>
                <div className={styles.cell}>{item.id}</div>
                <div className={styles.cell}>{item.date}</div>
                <div className={styles.cell}>{item.fullName}</div>
                <div className={styles.cell}>{item.subtotal}</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>There are no orders available to show</p>
      )}
    </div>
  );
}

export async function loader() {
  const order = await getAllOrders();
  return order;
}

export default MyOrders;
