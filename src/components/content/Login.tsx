import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const onFinish = (values: any) => {
    console.log('Succès:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Echec:', errorInfo);
};

const Login: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Le champ email est obligatoire.' }]}
            >
                <Input type='email' placeholder='Email' prefix={<UserOutlined className="site-form-item-icon" />} />
            </Form.Item>

            <Form.Item
                label="Mot de passe"
                name="password"
                rules={[{ required: true, message: 'Le champ mot de passe est obligatoire.' }]}
            >
                <Input.Password
                    placeholder="Mot de passe"
                    visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                    prefix={<LockOutlined className="site-form-item-icon" />} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Se souvenir de moi</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Se connecter
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login;