import * as React from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import frFR from "antd/locale/fr_FR";
import App from "./App";

let root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <ConfigProvider locale={frFR}>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  );
}
