import OrderTableHeader from './OrderTableHeader';
import OrderTableRow from './OrderTableRow';

function OrderTable({ orderedItems }) {
  return (
    <div className="table">
      <OrderTableHeader />

      {orderedItems.map(item => (
        <OrderTableRow key={item.id} item={item} />
      ))}
    </div>
  );
}

export default OrderTable;
