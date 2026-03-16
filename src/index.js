import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Desktop cursor: watering can (uses public folder asset)
// Use PUBLIC_URL so this works correctly even if the app is served from a subpath.
const wateringCanCursor = `${process.env.PUBLIC_URL || ""}/wateringcan-cursor.png`;

const updateCursor = () => {
  const isDesktop = window.matchMedia("(min-width: 769px)").matches;
  const cursorValue = isDesktop
    ? `url(${wateringCanCursor}) 16 16, auto`
    : "auto";

  // Apply to both root HTML and body to avoid element overrides
  document.documentElement.style.cursor = cursorValue;
  document.body.style.cursor = cursorValue;
};

// Apply cursor on load
updateCursor();
window.addEventListener("resize", updateCursor);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
