import styles from '../../Order.module.css';

function MyOrdersTableHeader() {
  return (
    <div className={`${styles.row} ${styles.header}`}>
      <div className={styles.cell}>ORDER ID</div>
      <div className={styles.cell}>DATE</div>
      <div className={styles.cell}>DelIVER TO</div>
      <div className={styles.cell}>TOTAL</div>
    </div>
  );
}

export default MyOrdersTableHeader;
