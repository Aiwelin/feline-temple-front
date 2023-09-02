import "./SignUp.css";
import { Button, Form, Input } from "antd";

const SignUp = () => {
  return (
    <div id="form-signup">
      <h2>Création de mon compte</h2>
      <Form layout="vertical" labelAlign="right">
        <Form.Item label="Prénom">
          <Input />
        </Form.Item>
        <Form.Item label="Nom">
          <Input />
        </Form.Item>
        <Form.Item label="Adresse">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Créer mon compte</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignUp;
