import GlobalStyles from "@mui/material/GlobalStyles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Metabnb/">
    <GlobalStyles
      styles={{
        img: { width: "100%" },
        p: { fontWeight: "400" },
        body: { maxWidth: "100vw" },
      }}
    />
    <App />
  </BrowserRouter>
);
