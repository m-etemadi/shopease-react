import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  getPropertyById,
} from './cartSlice';

import Button from '../../ui/Common/Button/Button';

function CartQuantityControl({ item }) {
  const { id } = item;

  const dispatch = useDispatch();

  const currentQuantity = useSelector(getPropertyById(id, 'quantity'));

  return (
    <>
      <Button
        type="quantity"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </Button>

      <span className="quantity-label">{currentQuantity}</span>

      <Button
        type="quantity"
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </Button>
    </>
  );
}

export default CartQuantityControl;
