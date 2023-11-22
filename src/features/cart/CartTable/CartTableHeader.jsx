import styles from './CartTable.module.css';

function CartTableHeader({ removeCell }) {
  return (
    <div className={`${styles.row} ${styles.header}`}>
      <div className={styles.cell}>Products</div>
      <div className={styles.cell}>Title</div>
      <div className={styles.cell}>Price</div>
      <div className={styles.cell}>Quantity</div>
      <div className={styles.cell}>Total</div>
      {removeCell && <div className={styles.cell}>Remove</div>}
    </div>
  );
}

export default CartTableHeader;
