import styles from './SpinnerFullPage.module.css';

function SpinnerFullPage() {
  return (
    <div className={styles.spinnerFullPage}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default SpinnerFullPage;
