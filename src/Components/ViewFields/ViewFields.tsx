import styles from './view.module.css';
import MessageList from '../MessageList/MessageList';
import PhoneList from '../PhonesList/PhoneList';

const ViewFields = () => {
  return (
    <div className={styles.conteiner}>
      <PhoneList />
      <MessageList />
    </div>
  );
};

export default ViewFields;
