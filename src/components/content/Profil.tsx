import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

const Profil: React.FC = () => {
  const user = { name: "Amandine", lastName: "PICHARD", avatar: null };
  return (
    <div id="form-profil">
      <div id="form-name-profil">
        if(user.avatar){<img key={user.avatar} src={user.avatar} />} else{" "}
        {<Avatar size={64} icon={<UserOutlined />} />}
        <p>
          `{user.name} {user.lastName}`
        </p>
      </div>
    </div>
  );
};

export default Profil;
