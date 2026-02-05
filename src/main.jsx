import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/**
 * today work 
 * Create a Login Page
 * Install axios
 * CORS - install cors in backend => add middleware to with configurations: orgin, credentials: true
 * Whenever you're making API call so pass axios => { withCredentials: true }
 * 
 */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
