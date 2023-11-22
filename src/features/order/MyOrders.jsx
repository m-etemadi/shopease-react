import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Message from '../../ui/Common/Message';

import styles from './order.module.css';
import { getOrder } from '../../services/apiProducts';

function MyOrders() {
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    state => state.authentication.isAuthenticated
  );

  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  async function handleSearchOrder(e) {
    e.preventDefault();

    if (!query) return;

    const result = await getOrder(query);
    setSearchResult(result);

    setQuery('');
  }

  return (
    <div className="container">
      <h2 className="heading-primary">My orders</h2>

      <div className={styles.ordersContainer}>
        <form onSubmit={handleSearchOrder} className={styles.searchOrders}>
          <input
            className="form-input"
            placeholder="Search by order id"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </form>

        {searchResult ? (
          <div className={styles.searchResult}>
            <div className={`${styles.row} ${styles.header}`}>
              <div className={styles.cell}>ORDER PLACED</div>
              <div className={styles.cell}>TOTAL</div>
              <div className={styles.cell}>DELIVER TO</div>
              <div className={styles.cell}>ORDER ID</div>
            </div>
            <Link to={`/my-orders/${searchResult.id}`} className={styles.row}>
              <div className={styles.cell}>{searchResult.date}</div>
              <div className={styles.cell}>${searchResult.subtotal}</div>
              <div className={styles.cell}>{searchResult.fullName}</div>
              <div className={styles.cell}># {searchResult.id}</div>
            </Link>
          </div>
        ) : (
          <Message message="No matching result found" />
        )}
      </div>
    </div>
  );
}

export default MyOrders;
