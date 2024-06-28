import { router } from "./router/routes";
import "./main.scss";
import iconPortafolio from './images/icon-portafolio.ico';

window.addEventListener("hashchange", () => {
  router(window.location.hash);
})