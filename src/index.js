import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import "./assets/css/reset.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faFacebookF,
  faInstagram,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter } from "react-router-dom";

library.add(fas, faTwitter, faFontAwesome, faFacebookF, faInstagram, faTiktok);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
