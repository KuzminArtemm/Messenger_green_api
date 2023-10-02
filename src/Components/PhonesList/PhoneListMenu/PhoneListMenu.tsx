import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

import styles from './phoneListMenu.module.css';
import LogOut from '../../LogOut/LogOut';

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />
  },
  {
    label: <LogOut />,
    key: '3',
    icon: <UserOutlined />,
    danger: true
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
  items
};

const PhoneListMenu: React.FC = () => (
  <Space className={styles.conteiner} wrap>
    <Dropdown.Button className={styles.dropdown} menu={menuProps}>
      Menu
    </Dropdown.Button>
  </Space>
);

export default PhoneListMenu;
