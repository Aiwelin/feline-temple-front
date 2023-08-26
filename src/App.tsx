import * as React from "react";
import "./App.scss";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import frFR from "antd/locale/fr_FR";
import { ConfigProvider } from "antd";
import { Header } from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import { AuthentificationContextProvider } from "./context/AuthentificationContext";
import Content from "./components/content/Content";
import { BookingCatSitterContextProvider } from "./context/BookingCatSitterContext";

let root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <ConfigProvider locale={frFR}>
        <div className="App">
          <AuthentificationContextProvider>
            <BookingCatSitterContextProvider>
              <BrowserRouter>
                <Header />
                <Content />
                <Footer />
              </BrowserRouter>
            </BookingCatSitterContextProvider>
          </AuthentificationContextProvider>
        </div>
      </ConfigProvider>
    </React.StrictMode>
  );
}
