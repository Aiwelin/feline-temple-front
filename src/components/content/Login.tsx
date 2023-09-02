import "./Login.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { DEFAULT_ROOT, CREATION, HOME } from "../../root/Path";
import { useEffect, useState } from "react";

const Login = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [cookie, setCookie] = useState();
  const onFinish = (values: FieldLoginType) => {
    console.log(values);
    if (values.remember) {
      console.log(values);
      console.log(values);
      setCookieRememberMe(values.email);
    } else {
      setRemoveCookie();
    }
    message.success("Connexion réussie. Redirection dans 5 secondes");
    // TODO ajouter un délai de 5 secondes
    navigate(DEFAULT_ROOT + HOME);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error("Connexion impossible.");
  };

  const setCookieRememberMe = (email: string) => {
    cookies.set("remember-me", { email }, { path: "/", secure: true });
  };

  const setRemoveCookie = () => {
    cookies.remove("remember-me", { path: "/", secure: true });
  };

  const redirectCreate = () => {
    navigate(DEFAULT_ROOT + CREATION);
  };

  useEffect(() => {
    const cookieRememberMe = cookies.get("remember-me");
    if (cookieRememberMe) {
      setCookie(cookieRememberMe);
    }
  });

  return (
    <div id="form-login">
      <h2>Se connecter</h2>
      <Form
        layout="vertical"
        labelAlign="right"
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldLoginType>
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Le champ email est obligatoire." },
          ]}
        >
          <Input
            type="email"
            placeholder="Email"
            value={cookie}
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item<FieldLoginType>
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
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item<FieldLoginType> name="remember" valuePropName="checked">
          <Checkbox>Se souvenir de moi</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Se connecter
          </Button>
        </Form.Item>
      </Form>
      <Button type="text" onClick={redirectCreate}>
        Pas de compte ? Inscrivez-vous.
      </Button>
    </div>
  );
};

export default Login;
