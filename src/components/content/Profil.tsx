import "./Profil.css";
import * as React from "react";
import { User } from "../../interface/UserInterface";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Form, Input } from "antd";

export default class Profil extends React.Component<User, {}> {
  constructor(props: User) {
    super(props);
  }
  render() {
    return (
      <div id="form-profil">
        <h2>Mon profil</h2>
        <Form layout="vertical" labelAlign="right">
          {this.props.avatar ? (
            <img key={this.props.avatar} src={this.props.avatar} />
          ) : (
            <Avatar size={64} icon={<UserOutlined />} />
          )}
          <Form.Item label="Prénom">
            <Input disabled value={this.props.name} />
          </Form.Item>
          <Form.Item label="Nom">
            <Input disabled value={this.props.lastName} />
          </Form.Item>
          <Form.Item label="Adresse">
            <Input disabled value={this.props.address} />
          </Form.Item>
        </Form>
      </div>
    );
  }
}
