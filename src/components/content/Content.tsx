import "./Content.css";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthentificationContext } from "../../context/AuthentificationContext";
import Login from "./Login";
import Profil from "./Profil";
import Notification from "./Notification";
import Booking from "./booking/Booking";
import FormSelectedBooking from "./booking/form/FormSelectedBooking";
import MentionsLegales from "./MentionsLegales";
import Contact from "./Contact";
import MyBooking from "./booking/MyBooking";
import {
  DEFAULT_ROOT,
  HOME,
  MY_BOOKING,
  PROFIL,
  NOTIFICATIONS,
  CONNEXION,
  LEGAL,
  CONTACT,
  BOOKING,
} from "../../root/Path";

const Content = () => {
  const currentUser = useContext(AuthentificationContext);

  return (
    <div id="app-content" className="content">
      <Routes>
        <Route path={DEFAULT_ROOT} element={<Booking />}></Route>
        <Route path={HOME} element={<Booking />}></Route>
        <Route path={MY_BOOKING} element={<MyBooking />}></Route>
        <Route path={PROFIL} element={<Profil {...currentUser} />}></Route>
        <Route path={NOTIFICATIONS} element={<Notification />}></Route>
        <Route path={CONNEXION} element={<Login />}></Route>
        <Route path={LEGAL} element={<MentionsLegales />}></Route>
        <Route path={CONTACT} element={<Contact />}></Route>
        <Route path={BOOKING} element={<FormSelectedBooking />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
