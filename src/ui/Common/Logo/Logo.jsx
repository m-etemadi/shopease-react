import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

function Logo() {
  return (
    <h1 className={styles.logo}>
      <Link title="ShopEase" to="/">
        Shop<span>Ease</span>
      </Link>
    </h1>
  );
}

export default Logo;
