import Contact from "../controllers/contact";
import acercaDeMi from "../controllers/acerca-de-mi.controller";
const content = document.getElementById("root");


const router = (route) => {
  content.innerHTML = " ";
  switch (route) {
    case "#/acerca-de-mi": {
      return content.appendChild(acercaDeMi());
    }
    case "#/proyectos":
      return console.log("Proyectos");
    case "#/experiencias":
      return console.log("Experiencias");
    case "#/educacion":
      return console.log("Educación");
    case "#/contacto": {
      return content.appendChild(Contact());
    }
    default:
      return console.log("404")
  }
}

export { router };