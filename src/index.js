import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Snowfall from "react-snowfall";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background:
          "linear-gradient(0deg, rgba(82,34,195,1) 0%, rgba(90,45,253,1) 100%)",
        position: "relative",
      }}
    >
      <Snowfall />
      <App />
    </div>
  </React.StrictMode>
);
