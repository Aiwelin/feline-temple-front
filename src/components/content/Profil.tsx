import * as React from "react";
import { User } from "../../UserInterface";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

export default class Profil extends React.Component<User, {}> {
  constructor(props: User) {
    super(props);
  }
  render() {
    return (
      <div id="form-profil">
        <div id="form-name-profil">
          {this.props.avatar ? (
            <img key={this.props.avatar} src={this.props.avatar} />
          ) : (
            " "
          )}
          {<Avatar size={64} icon={<UserOutlined />} />}
          <p>
            {this.props.name} {this.props.lastName}
          </p>
          <p>{this.props.address}</p>
        </div>
      </div>
    );
  }
}
