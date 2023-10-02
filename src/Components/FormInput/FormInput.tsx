import React, { useState } from 'react';

import { Button, Input, Space } from 'antd';
import { nanoid } from 'nanoid';

import styles from './formInput.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { queryAvatar } from '../../redux/slices/addAvatar';
import { addPhoneReducer } from '../../redux/slices/addPhoneSlice';

const FormInput: React.FC = () => {
  const person = useAppSelector((store) => store.person.personList);
  const avatarList = useAppSelector((store) => store.avatarList.avatarList);
  const ApiTokenInstance = person[0].ApiTokenInstance;
  const IdInstance = person[0].IdInstance;
  const initState: string = '';
  const [phoneNumber, setPhonenumber] = useState(initState);
  const dispatch = useAppDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(+e.target.value)) {
      setPhonenumber(e.target.value);
    } else {
      setPhonenumber('');
    }
  };
  const submitHandler = () => {
    if (phoneNumber.trim()) {
      const formPhoneForStore = {
        id: nanoid(),
        phoneNumber: phoneNumber.trim(),
        active: false
      };
      dispatch(addPhoneReducer(formPhoneForStore));
      dispatch(queryAvatar({ IdInstance, ApiTokenInstance, phoneNumber }));
      setPhonenumber('');
    }
  };
  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const formPhoneForStore = {
        id: nanoid(),
        phoneNumber: phoneNumber.trim(),
        active: false
      };
      if (phoneNumber.trim()) {
        dispatch(queryAvatar({ IdInstance, ApiTokenInstance, phoneNumber }));
        dispatch(addPhoneReducer(formPhoneForStore));
        setPhonenumber('');
      }
    }
  };
  return (
    <Space className={styles.conteiner} direction="vertical" size="middle">
      <Space.Compact style={{ width: '100%' }}>
        <Input
          value={phoneNumber}
          className={styles.input}
          placeholder="phone number"
          onChange={changeHandler}
          name="phone"
          autoComplete="disabled"
          onKeyDown={enterHandler}
        />
        <Button onClick={submitHandler} type="text">
          Add
        </Button>
      </Space.Compact>
    </Space>
  );
};

export default FormInput;
