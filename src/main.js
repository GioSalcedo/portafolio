import { router } from "./routes/routes";
import "./main.scss";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
})