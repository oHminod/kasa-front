import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./utils/routes.jsx";
import LogementsContextProvider from "./utils/logementsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LogementsContextProvider>
      <Router />
    </LogementsContextProvider>
  </StrictMode>
);
