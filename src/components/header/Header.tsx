import { Menu } from "antd";
import itemsConnected from "./MenuConnected";
import itemsNotConnected from "./MenuNotConnected";
import Profil from "../content/Profil";
import Notification from "../content/Notification";

const isLoggedIn = true;

const onClick = (menuClick) => {
  switch (menuClick.key) {
    case "profilMenu":
      <Profil />;
      break;
    case "mailMenu":
      <Notification />;
      break;
  }
};

const Header = () => {
  const user = { name: "Amandine", lastName: "PICHARD" };
  return (
    <header id="app-header" className="header">
      <Menu
        mode="horizontal"
        items={isLoggedIn ? itemsConnected : itemsNotConnected}
        onClick={onClick}
      />
    </header>
  );
};

export default Header;
