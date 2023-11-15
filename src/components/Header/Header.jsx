import Logo from '../Common/Logo';
import Navbar from '../Navbar/Navbar';
import UserActions from '../Navbar/UserActions';

function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <Logo />
        <Navbar />
        <UserActions />
      </div>
    </header>
  );
}

export default Header;
