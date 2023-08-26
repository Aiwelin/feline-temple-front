import "./Profil.css";
import * as React from "react";
import { User } from "../../interface/UserInterface";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Form, Input } from "antd";
import logo from "../../assets/pawprint.svg";

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
        </Form>
      </div>
    );
  }
}
