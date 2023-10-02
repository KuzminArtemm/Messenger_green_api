import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';

import styles from './messageListMenu.module.css';
import { useAppSelector } from '../../../hooks/hooks';

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: 'Clear chat',
    key: '1',
    icon: <UserOutlined />
  },

  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true
  }
];

const menuProps = {
  items,
  onClick: handleMenuClick
};

const MessageListMenu: React.FC = () => {
  const phoneList = useAppSelector((store) => store.phoneList.phoneList);
  const isActive = phoneList.find((el) => el.active === true);
  return (
    <Space className={styles.conteiner} wrap>
      <Dropdown.Button
        className={styles.dropdown}
        menu={menuProps}
        onClick={handleButtonClick}
      >
        {isActive ? isActive?.phoneNumber : 'user'}
      </Dropdown.Button>
    </Space>
  );
};

export default MessageListMenu;
