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
 *  why? : In unsecure networks - If you are not on same domain , not using https then So browser doesnt allow your cookies to be set into your browser
 */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
