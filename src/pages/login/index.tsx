import React, { FC, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { requestFrom } from "./interface";
import { loginAction } from "@/store/modules/login";
import { useAppDispatch } from "@/store";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onFinish = async (values: requestFrom) => {
    try {
      setLoading(true);
      await dispatch(loginAction(values));
      navigate("/");
    } catch (error: any) {
      console.log(error);
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

export default Login;
