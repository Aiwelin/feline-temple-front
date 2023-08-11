import { Menu, MenuProps } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  LoginOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { HomeCatIcon } from "../icons/CatsIcon";
import { useContext } from "react";
import { AuthentificationContext } from "../../context/AuthentificationContext";
import { useNavigate } from "react-router-dom";

const HeaderProvider = () => {
  const currentUser = useContext(AuthentificationContext);

  const navigate = useNavigate();

  const itemsConnected: MenuProps["items"] = [
    {
      label: "Accueil",
      key: "accueil",
      icon: <HomeCatIcon style={{ color: "hotpink" }} />,
    },
    {
      label: "Mes réservations",
      key: "reservations",
      icon: <AppstoreOutlined />,
    },
    {
      label: `${currentUser.name} ${currentUser.lastName}`,
      key: "userMenu",
      icon: <SettingOutlined />,
      children: [
        {
          label: "Mon profil",
          key: "profil",
          icon: <ProfileOutlined />,
        },
        {
          label: "Mes notifications",
          key: "notifications",
          icon: <MailOutlined />,
        },
        {
          label: "Se déconnecter",
          key: "deconnexion",
          icon: <LogoutOutlined />,
          danger: true,
        },
      ],
    },
  ];

  const itemsNotConnected: MenuProps["items"] = [
    {
      label: "Accueil",
      key: "accueil",
      icon: <HomeOutlined />,
    },
    {
      label: `Se connecter`,
      key: "connexion",
      icon: <LoginOutlined />,
    },
  ];

  function onChangeMenu(menu) {
    console.log(menu.key);
    if (menu.key === "deconnexion") {
      currentUser.isConnected = false;
      navigate("/");
    } else {
      navigate(menu.key);
    }
  }

  const Menu = () => {
    return (
      <div>
        <header id="app-header" className="header">
          <Menu
            mode="horizontal"
            items={currentUser.isConnected ? itemsConnected : itemsNotConnected}
            onClick={onChangeMenu}
          />
        </header>
      </div>
    );
  };

  return <Menu />;
};

export { HeaderProvider };
