import React, { FC, useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, App } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { requestFrom } from "./interface";
import { useNavigate, useLocation } from "react-router-dom";
import { routerEnum } from "@/enum/router";
import { login } from "@/services/login";
import {
  setLocalStorage,
  TOKEN_KEY,
  PERMISSIONS_KEY,
  hasToken,
} from "@/utils/storage";

const Logins: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  const { message } = App.useApp();

  useEffect(() => {
    if (hasToken()) navigate(routerEnum.HOME_ROUTER);
  }, [pathname]);

  const onFinish = async (values: requestFrom) => {
    try {
      setLoading(true);
      const res = await login(values);
      setLocalStorage(TOKEN_KEY, {
        assess_token: res.token,
      });
      setLocalStorage(PERMISSIONS_KEY, res.permissions);
      message.success("登录成功");
      setTimeout(() => {
        navigate(routerEnum.HOME_ROUTER);
      }, 1000);
    } catch (error: any) {
      console.log(error);
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [form] = Form.useForm();
  return (
    <div className={styles.root}>
      <div className={styles["login-form-content"]}>
        <Form
          name="basic"
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          size="large"
          className={styles["login-forms"]}
          form={form}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder="用户名：admin" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              autoComplete="new-password"
              placeholder="密码：123456"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item
            className={styles["login-remember"]}
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 0, span: 16 }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<UserOutlined />}
              loading={loading}
              className={styles["login-btn"]}
            >
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const Login: FC = () => (
  <App>
    <Logins />
  </App>
);

export default Login;
