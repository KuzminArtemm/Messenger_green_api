import React from 'react';

import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import { persistor } from '../../redux/store/store';

type handlerLogOutType = () => void;

const LogOut: React.FC = () => {
  const navigate = useNavigate();
  const handlerLogOut: handlerLogOutType = () => {
    persistor.purge();
    navigate('/signin');
  };
  return (
    <Space className="site-button-ghost-wrapper" wrap>
      <Button onClick={handlerLogOut} type="text">
        Logout
      </Button>
    </Space>
  );
};

export default LogOut;
