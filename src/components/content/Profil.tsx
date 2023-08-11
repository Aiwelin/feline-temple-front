import * as React from "react";
import UserInterface from "../../UserInterface";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

export default class Profil extends React.Component<UserInterface, {}> {
  constructor(props: UserInterface) {
    super(props);
  }
  render() {
    return (
      <div id="form-profil">
        <div id="form-name-profil">
          if(this.props.avatar)
          {<img key={this.props.avatar} src={this.props.avatar} />} else{" "}
          {<Avatar size={64} icon={<UserOutlined />} />}
          <p>
            `{this.props.name} {this.props.lastName}`
          </p>
        </div>
      </div>
    );
  }
}
