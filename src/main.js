import "./main.scss";

import { router } from "./router/routes";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
})