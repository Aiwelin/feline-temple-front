import "./Footer.scss";
import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { MailOutlined, IssuesCloseOutlined } from "@ant-design/icons";
import { DEFAULT_ROOT, LEGAL, CONTACT } from "../../root/Path";

const Footer = () => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      label: "Contact",
      key: CONTACT,
      icon: <MailOutlined />,
    },
    {
      label: "Mentions légales",
      key: LEGAL,
      icon: <IssuesCloseOutlined />,
    },
  ];
  function onChangeMenu(menu: any) {
    navigate(DEFAULT_ROOT + menu.key);
  }

  return (
    <footer id="app-footer" className="footer">
      <Menu mode="horizontal" items={items} onClick={onChangeMenu} />
    </footer>
  );
};
export default Footer;
