import styles from './messageField.module.css';
import { useAppSelector } from '../../../hooks/hooks';
import MessageItem from '../MessageItem/MessageItem';

const MessageField = () => {
  const phoneList = useAppSelector((store) => store.phoneList.phoneList);
  const messageList = useAppSelector((store) => store.messageList.messageList);
  const isActive = phoneList.find((el) => el.active === true);
  const itemFromMessageList = messageList.filter((el) => {
    if (isActive?.phoneNumber === el.phoneNumber) {
      return el;
    } else {
      return false;
    }
  });
  return (
    <div className={styles.conteiner}>
      {isActive?.phoneNumber === itemFromMessageList[0]?.phoneNumber
        ? itemFromMessageList.map((message, index) => {
            return (
              <MessageItem
                key={message.idMessage}
                message={message.message}
                phone={message.phoneNumber}
                index={index}
              />
            );
          })
        : null}
    </div>
  );
};

export default MessageField;
