import "./Login.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Succès:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Echec:", errorInfo);
  };

  const redirectCreate = () => {
    navigate("creation");
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div id="form-login">
      <h2>Se connecter</h2>
      <Form
        layout="vertical"
        labelAlign="right"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Le champ email est obligatoire." },
          ]}
        >
          <Input
            type="email"
            placeholder="Email"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          label="Mot de passe"
          name="password"
          rules={[
            {
              required: true,
              message: "Le champ mot de passe est obligatoire.",
            },
          ]}
        >
          <Input.Password
            placeholder="Mot de passe"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Se souvenir de moi</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Se connecter
          </Button>
        </Form.Item>
      </Form>
      <Button type="text" onClick={redirectCreate()}>
        Pas de compte ? Inscrivez-vous.
      </Button>
    </div>
  );
};

export default Login;
