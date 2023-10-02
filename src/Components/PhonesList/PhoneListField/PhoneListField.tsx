import { useState } from 'react';

import styles from './phoneListField.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { addActive } from '../../../redux/slices/addPhoneSlice';
import PhoneListItem from '../PhoneListItem/PhoneListItem';

const PhoneListField = () => {
  const phoneList = useAppSelector((store) => store.phoneList.phoneList);
  const [activeItem, setActiveItem] = useState<undefined | string>(undefined);
  const dispatch = useAppDispatch();
  const handleClickActive = (phoneNumber: string | undefined) => {
    activeItem === phoneNumber
      ? setActiveItem(undefined)
      : setActiveItem(phoneNumber);
    if (phoneNumber) dispatch(addActive(phoneNumber));
  };
  return (
    <div className={styles.conteiner}>
      {phoneList ? (
        phoneList.map((phone, index) => {
          return (
            <PhoneListItem
              index={index}
              key={phone.id}
              {...phone}
              handleClickActive={handleClickActive}
              active={activeItem === phone.phoneNumber}
            />
          );
        })
      ) : (
        <p>list is empty</p>
      )}
    </div>
  );
};

export default PhoneListField;
