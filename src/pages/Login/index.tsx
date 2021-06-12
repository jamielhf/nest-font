import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import './index.scss';

const  LoginForm = (props: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return(
    <div>
    <Row>
      <Col  offset={8} span={8}>
    <Form onSubmit={handleSubmit} className="login-form">
    <Form.Item>
      {getFieldDecorator('username', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />,
      )}
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please input your Password!' }],
      })(
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />,
      )}
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        登陆
      </Button>
      <Button type="default"  className="login-form-button">
        注册
      </Button>

      <a className="login-form-forgot" href="">
        Forgot password
      </a>
    </Form.Item>
  </Form>
  </Col>
    </Row>
    </div>
  );
};

export default Form.create({ name: 'login' })(LoginForm);
