import { NavLink } from 'react-router-dom';
// import { useShopping } from '../../contexts/ShoppingContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  // const { cartLength, totalQuantity } = useShopping();

  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
        <NavLink to="cart">
          {/* {cartLength > 0 && (
            <span className="cart-badge">
              {cartLength > 9 ? '+10' : totalQuantity}
            </span>
          )} */}
          <FontAwesomeIcon icon={faShoppingCart} size="xl" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
