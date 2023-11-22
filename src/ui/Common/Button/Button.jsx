import styles from './Button.module.css';

function Button({ onClick = null, type, children }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
