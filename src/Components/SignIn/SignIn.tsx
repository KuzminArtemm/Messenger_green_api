import React, { useEffect, useState } from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { queryPerson } from '../../redux/slices/personSlice';

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const initState: string = '';
  const navigate = useNavigate();
  const authorized = Object.values(
    useAppSelector((store) => store.person.personList)
  )[0];
  const [textId, setTextId] = useState(initState);
  const [textToken, setTextToken] = useState(initState);
  const changeHandlerId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextId(e.target.value);
  };
  const changeHandlerToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextToken(e.target.value);
  };
  const handlerButtonSubmit = () => {
    dispatch(
      queryPerson({
        IdInstance: textId,
        ApiTokenInstance: textToken
      })
    );
  };

  useEffect(() => {
    if (authorized) navigate('/');
  });

  return (
    <div
      style={{
        marginTop: '200px'
      }}
    >
      <h2>Sign In</h2>
      <Row align="middle" justify="center">
        <Col xs={12} md={{ span: 4 }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your IdInstance!' }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="IdInstance"
                value={textId}
                onChange={changeHandlerId}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your ApiTokenInstance!'
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="ApiTokenInstance"
                value={textToken}
                onChange={changeHandlerToken}
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={handlerButtonSubmit}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
