import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink title="Shop" to="/">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink title="FAQ" to="FAQ">
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
