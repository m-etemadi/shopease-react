import { useDispatch, useSelector } from 'react-redux';
import { removeItem, getPropertyById } from '../cartSlice';

import { formatCurrency, reduceTitleLength } from '../../../utils/helpers';

import Button from '../../../ui/Common/Button/Button';
import CartQuantityControl from '../CartQuantityControl';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartTableRow({ item }) {
  const { id, title, price, image } = item;

  const dispatch = useDispatch();

  const totalPrice = useSelector(getPropertyById(id, 'totalPrice'));

  return (
    <div className="row">
      <div className="cell">
        <img src={image} alt={reduceTitleLength(title)} loading="lazy" />
      </div>
      <div className="cell">
        <strong>{reduceTitleLength(title)}</strong>
      </div>
      <div className="cell">
        <span>{formatCurrency(price)}</span>
      </div>
      <div className="cell">
        <CartQuantityControl item={item} />
      </div>
      <div className="cell">
        <span>{formatCurrency(totalPrice)}</span>
      </div>
      <div className="cell">
        <Button type="remove" onClick={() => dispatch(removeItem(id))}>
          <FontAwesomeIcon icon={faTrash} size="xl" />
        </Button>
      </div>
    </div>
  );
}

export default CartTableRow;
