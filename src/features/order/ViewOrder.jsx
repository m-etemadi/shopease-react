import { useLoaderData } from 'react-router-dom';

import { getOrder } from '../../services/apiProducts';

import styles from './Order.module.css';

function ViewOrder() {
  const order = useLoaderData();

  const { id, totalQuantity, subtotal } = order;

  return (
    <div className={styles.ordersContainer}>
      <h2 className="heading-primary">Order ID: #{id}</h2>
      <p>{totalQuantity}</p>
      <p>{subtotal}</p>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default ViewOrder;
