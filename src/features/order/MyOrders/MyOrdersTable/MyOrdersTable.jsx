import MyOrdersTableHeader from './MyOrdersTableHeader';
import MyOrdersTableRow from './MyOrdersTableRow';

function MyOrdersTable({ orders }) {
  return (
    <div className="table">
      <MyOrdersTableHeader />

      {orders.map(item => (
        <MyOrdersTableRow key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MyOrdersTable;
