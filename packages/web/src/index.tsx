import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./containers/App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.body.appendChild(document.createElement("div"))
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
