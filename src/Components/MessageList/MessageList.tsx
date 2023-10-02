import MessageField from './MessageField/MessageField';
import MessageInput from './MessageInput/MessageInput';
import styles from './messageList.module.css';
import MessageListMenu from './MessageListMenu/MessageListMenu';
import { useAppSelector } from '../../hooks/hooks';

const MessageList = () => {
  const incomingMessageList = useAppSelector(
    (store) => store.messageIncomingList.messageIncomingList
  );
  console.log('incomingMessageList', incomingMessageList);
  return (
    <div className={styles.wrapper}>
      <MessageListMenu />
      <MessageInput />
      <MessageField />
    </div>
  );
};

export default MessageList;
