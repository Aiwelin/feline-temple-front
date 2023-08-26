import "./Footer.scss";
import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

import { MailOutlined, IssuesCloseOutlined } from "@ant-design/icons";

const Footer = () => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      label: "Contact",
      key: "contact",
      icon: <MailOutlined />,
    },
    {
      label: "Mentions légales",
      key: "mentions-legales",
      icon: <IssuesCloseOutlined />,
    },
  ];
  function onChangeMenu(menu: any) {
    navigate(menu.key);
  }

  return (
    <footer id="app-footer" className="footer">
      <Menu mode="horizontal" items={items} onClick={onChangeMenu} />
    </footer>
  );
};
export default Footer;
