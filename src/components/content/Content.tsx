import { Route, Routes } from "react-router-dom";
import Profil from "./Profil";
import { useContext } from "react";
import { AuthentificationContext } from "../../context/AuthentificationContext";
import CalendarBooking from "./Booking";
import Login from "./Login";

const Content = () => {
  const currentUser = useContext(AuthentificationContext);

  return (
    <div id="app-containter">
      <Routes>
        <Route path="/" element={<CalendarBooking />}></Route>
        <Route path="/accueil" element={<CalendarBooking />}></Route>
        <Route path="/reservations" element={<CalendarBooking />}></Route>
        <Route path="/profil" element={<Profil {...currentUser} />}></Route>
        <Route path="/connexion" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
