import "./Header.css";
import textLogo from "../../assets/logo-temple-felide.svg";
import logo from "../../assets/pawprint.svg";
import { Menu, MenuProps } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  BellOutlined,
  SettingOutlined,
  LoginOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
//import { HomeCatIcon } from "../icons/CatsIcon";
import { useContext } from "react";
import { AuthentificationContext } from "../../context/AuthentificationContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const currentUser = useContext(AuthentificationContext);

  const navigate = useNavigate();

  const itemsConnected: MenuProps["items"] = [
    {
      label: "Accueil",
      key: "accueil",
      icon: <HomeOutlined />,
      // icon: <HomeCatIcon style={{ color: "hotpink" }} />,
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
          icon: <BellOutlined />,
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

  function onChangeMenu(menu: any) {
    if (menu.key === "deconnexion") {
      currentUser.isConnected = false;
      navigate("/");
    } else {
      navigate(menu.key);
    }
  }

  const MenuNavigate = () => {
    return (
      <Menu
        mode="horizontal"
        items={currentUser.isConnected ? itemsConnected : itemsNotConnected}
        onClick={onChangeMenu}
      />
    );
  };

  return (
    <header id="app-header" className="header">
      <MenuNavigate />
      <img src={textLogo} className="text-logo" alt="Le temple félidé" />
      <img
        src={logo}
        className="logo"
        alt="logo représentant une patte de chat qui tourne"
      />
    </header>
  );
};

export { Header };
