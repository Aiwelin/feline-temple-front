import { createBrowserRouter, RouterProvider } from "react-router-dom";
import frFR from "antd/locale/fr_FR";
import { ConfigProvider } from "antd";

import ErrorPage from "./Errors.js";
import Header from "./components/header/Header.js";
import Content from "./components/content/Content.js";
import CalendarBooking from "./components/content/Booking.js";
import Profil from "./components/content/Profil.js";
import Footer from "./components/footer/Footer.js";

import "./App.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import * as React from "react";

let root = document.getElementById("root");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profil",
    element: <Profil />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reservation",
    element: <CalendarBooking />,
    errorElement: <ErrorPage />,
  },
]);
 createRoot(root).render(
  <React.StrictMode>
    <ConfigProvider locale={frFR}>
      <div className="App">
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </ConfigProvider>
  </React.StrictMode>
);
