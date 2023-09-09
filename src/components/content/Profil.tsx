import "./Profil.css";
import * as React from "react";
import User from "../../interface/User";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Form, Input } from "antd";

export default class Profil extends React.Component<User, {}> {
  constructor(props: User) {
    super(props);
  }
  render() {
    return (
      <div id="form-profil">
        <h2>
          {this.props.avatar ? (
            <img
              className="avatar"
              key={this.props.avatar}
              src={this.props.avatar}
              width="150px"
            />
          ) : (
            <Avatar size={64} icon={<UserOutlined />} />
          )}
          Mon profil
        </h2>
        <Form layout="vertical" labelAlign="right">
          <Form.Item label="Prénom">
            <Input disabled value={this.props.name} />
          </Form.Item>
          <Form.Item label="Nom">
            <Input disabled value={this.props.lastName} />
          </Form.Item>
          <Form.Item label="Adresse">
            <Input disabled value={this.props.address} />
          </Form.Item>
          <Form.Item label="Email">
            <Input disabled value={this.props.email} />
          </Form.Item>
          <Form.Item label="Mot de passe">
            <Input.Password disabled value={this.props.password} />
          </Form.Item>
        </Form>
      </div>
    );
  }
}
