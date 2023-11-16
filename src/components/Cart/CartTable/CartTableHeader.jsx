import styles from './CartTable.module.css';

function CartTableHeader() {
  return (
    <div className={`${styles.row} ${styles.header}`}>
      <div className={styles.cell}>Products</div>
      <div className={styles.cell}>Title</div>
      <div className={styles.cell}>Price</div>
      <div className={styles.cell}>Quantity</div>
      <div className={styles.cell}>Total</div>
      <div className={styles.cell}>Remove</div>
    </div>
  );
}

export default CartTableHeader;
