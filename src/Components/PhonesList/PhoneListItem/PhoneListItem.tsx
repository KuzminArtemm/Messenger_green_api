import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

import styles from './phoneListItem.module.css';
import { useAppSelector } from '../../../hooks/hooks';

type Props = {
  id: string;
  phoneNumber: string;
  active: boolean;
  index: number;
  handleClickActive: (phoneNumber: string) => void;
};

const PhoneListItem = ({
  phoneNumber,
  active,
  index,
  handleClickActive
}: Props) => {
  let avatarStore = useAppSelector((store) => store.avatarList.avatarList);
  let matchedItem = avatarStore.find((el) => el.phoneNumber === phoneNumber);
  return (
    <div
      className={styles.conteiner}
      style={{
        color: active ? 'green' : undefined,
        backgroundColor: active ? '#b2bec3' : undefined,
        cursor: 'pointer'
      }}
      onClick={() => handleClickActive(phoneNumber)}
    >
      {index + 1}. {phoneNumber}
      <Space wrap size={16}>
        <Avatar
          size="large"
          src={matchedItem?.urlAvatar}
          icon={<UserOutlined />}
        />
      </Space>
    </div>
  );
};

export default PhoneListItem;
