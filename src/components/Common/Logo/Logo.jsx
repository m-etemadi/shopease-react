import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

function Logo() {
  return (
    <h1 className={styles.logo}>
      <Link title="ShopEase" to="/">
        ShopEase
      </Link>
    </h1>
  );
}

export default Logo;
