import styles from './Message.module.css';

function Message({ message }) {
  return (
    <div className={styles.message}>
      <p>{message}</p>
    </div>
  );
}

export default Message;
