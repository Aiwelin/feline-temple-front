import "./Content.css";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthentificationContext } from "../../context/AuthentificationContext";
import Login from "./Login";
import Profil from "./Profil";
import Notification from "./Notification";
import Booking from "./booking/Booking";
import FormSelectedBooking from "./booking/form/FormSelectedBooking";

const Content = () => {
  const currentUser = useContext(AuthentificationContext);

  return (
    <div id="app-content" className="content">
      <Routes>
        <Route path="/" element={<Booking />}></Route>
        <Route path="/accueil" element={<Booking />}></Route>
        <Route path="/reservations" element={<Booking />}></Route>
        <Route path="/profil" element={<Profil {...currentUser} />}></Route>
        <Route path="/notifications" element={<Notification />}></Route>
        <Route path="/connexion" element={<Login />}></Route>
        <Route
          path="/reserver/:catsitterid"
          element={<FormSelectedBooking />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Content;
