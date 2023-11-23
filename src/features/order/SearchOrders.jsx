import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './order.module.css';

function SearchOrders() {
  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  async function handleSearchOrder(e) {
    e.preventDefault();

    if (!query) return;

    navigate(`/my-orders/${query}`);

    setQuery('');
  }

  return (
    <form onSubmit={handleSearchOrder} className={styles.searchOrders}>
      <input
        className="form-input"
        placeholder="Search by order ID"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrders;
