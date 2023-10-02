import styles from './phoneList.module.css';
import PhoneListField from './PhoneListField/PhoneListField';
import PhoneListMenu from './PhoneListMenu/PhoneListMenu';
import FormInput from '../FormInput/FormInput';

const PhoneList = () => {
  return (
    <div className={styles.wrapper}>
      <PhoneListMenu />
      <FormInput />
      <PhoneListField />
    </div>
  );
};

export default PhoneList;
