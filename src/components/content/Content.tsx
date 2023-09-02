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
  CREATION,
} from "../../root/Path";
import SignUp from "./SignUp";

const Content = () => {
  const currentUser = useContext(AuthentificationContext);

  return (
    <div id="app-content" className="content">
      <Routes>
        <Route path={DEFAULT_ROOT} element={<Booking />}></Route>
        <Route path={DEFAULT_ROOT + HOME} element={<Booking />}></Route>
        <Route path={DEFAULT_ROOT + MY_BOOKING} element={<MyBooking />}></Route>
        <Route
          path={DEFAULT_ROOT + PROFIL}
          element={<Profil {...currentUser} />}
        ></Route>
        <Route
          path={DEFAULT_ROOT + NOTIFICATIONS}
          element={<Notification />}
        ></Route>
        <Route path={DEFAULT_ROOT + CONNEXION} element={<Login />}></Route>
        <Route
          path={DEFAULT_ROOT + LEGAL}
          element={<MentionsLegales />}
        ></Route>
        <Route path={DEFAULT_ROOT + CONTACT} element={<Contact />}></Route>
        <Route path={DEFAULT_ROOT + CREATION} element={<SignUp />}></Route>
        <Route
          path={DEFAULT_ROOT + BOOKING}
          element={<FormSelectedBooking />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Content;
