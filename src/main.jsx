import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyles />

      <App />
    </React.StrictMode>
  </BrowserRouter>
);
