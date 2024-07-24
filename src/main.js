import { router } from "./routes/routes";
import "./main.scss";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
})

console.log("Hola amigo");