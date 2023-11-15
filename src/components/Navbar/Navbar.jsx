import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="FAQ">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
