import React, { useState } from 'react';

import { Button, Input, Space } from 'antd';

import styles from './messageInput.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { queryIncomingMessage } from '../../../redux/slices/addIncomingMessageSlice';
import { queryMessage } from '../../../redux/slices/addMessageSlice';

const MessageInput: React.FC = () => {
  const phoneList = useAppSelector((store) => store.phoneList.phoneList);
  const messageStore = useAppSelector((store) => store.messageList.messageList);
  const phoneNumber = phoneList.find((el) => el.active)?.phoneNumber;
  const person = useAppSelector((store) => store.person.personList);
  const ApiTokenInstance = person[0].ApiTokenInstance;
  const IdInstance = person[0].IdInstance;
  const isActive = phoneList.some((el) => el.active === true);
  const initState: string = '';
  const [text, setText] = useState(initState);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const dispatch = useAppDispatch();
  const enterHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const textTrim = text.trim();
    if (e.key === 'Enter' && textTrim) {
      dispatch(
        queryMessage({
          IdInstance: IdInstance,
          ApiTokenInstance: ApiTokenInstance,
          chatId: `${phoneNumber}@c.us`,
          message: `${textTrim}`,
          phoneNumber: phoneNumber
        })
      );
      dispatch(
        queryIncomingMessage({
          IdInstance,
          ApiTokenInstance,
          chatId: `${phoneNumber}@c.us`,
          count: 10,
          phoneNumber
        })
      );
      setText('');
    }
  };
  const submitHandler = async () => {
    const textTrim = text.trim();
    if (textTrim)
      dispatch(
        queryMessage({
          IdInstance: IdInstance,
          ApiTokenInstance: ApiTokenInstance,
          chatId: `${phoneNumber}@c.us`,
          message: `${textTrim}`,
          phoneNumber: phoneNumber
        })
      );
    setText('');
  };
  return isActive ? (
    <Space className={styles.conteiner} direction="vertical" size="middle">
      <Space.Compact className={styles.input}>
        <Input
          value={text}
          className={styles.input}
          placeholder="text a message"
          onChange={changeHandler}
          name="phone"
          autoComplete="disabled"
          onKeyDown={enterHandler}
        />
        <Button onClick={submitHandler} type="text" className={styles.button}>
          Add
        </Button>
      </Space.Compact>
    </Space>
  ) : (
    <p>list is empty</p>
  );
};

export default MessageInput;
