import styles from './messageItem.module.css';

type MessageItemProps = {
  message: string;
  phone: string | undefined;
  index: number;
};

const MessageItem = ({ message, phone, index }: MessageItemProps) => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.item}>{message}</div>
    </div>
  );
};

export default MessageItem;
