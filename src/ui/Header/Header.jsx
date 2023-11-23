import Logo from '../Common/Logo/Logo';
import Navbar from '../Navbar/Navbar';
import UserActions from '../Navbar/UserActions/UserActions';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={`${styles.header} p-2`}>
      <div className={`container-primary ${styles.container}`}>
        <Logo />
        <Navbar />
        <UserActions />
      </div>
    </header>
  );
}

export default Header;
