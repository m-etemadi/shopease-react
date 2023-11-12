import Navigation from './Navigation';
import UserActions from './UserActions';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Navigation />
        <UserActions />
      </div>
    </nav>
  );
}

export default Navbar;
