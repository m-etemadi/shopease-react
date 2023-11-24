import ViewOrderTableHeader from './ViewOrderTableHeader';
import ViewOrderTableRow from './ViewOrderTableRow';

function OrderTable({ orderedItems }) {
  return (
    <div className="table">
      <ViewOrderTableHeader />

      {orderedItems.map(item => (
        <ViewOrderTableRow key={item.id} item={item} />
      ))}
    </div>
  );
}

export default OrderTable;
