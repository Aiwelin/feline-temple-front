import * as React from "react";
import "./App.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import frFR from "antd/locale/fr_FR";
import { ConfigProvider } from "antd";
import { HeaderProvider } from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import { AuthentificationContextProvider } from "./context/AuthentificationContext";
import Content from "./components/content/Content";

let root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <ConfigProvider locale={frFR}>
      <div className="App">
        <AuthentificationContextProvider>
          <BrowserRouter>
            <HeaderProvider />
            <Content />
          </BrowserRouter>
          <Footer />
        </AuthentificationContextProvider>
      </div>
    </ConfigProvider>
  </React.StrictMode>
);
