import contact from "../controllers/contact";
import aboutMe from "../controllers/about-me";
import projects from "../controllers/projects";
import experience from "../controllers/experience";
import education from "../controllers/education";
const content = document.getElementById("root");


const router = (route) => {
  content.innerHTML = " ";
  switch (route) {
    case "#/acerca-de-mi":
      return content.appendChild(aboutMe());
    case "#/proyectos":
      return content.appendChild(projects());
    case "#/experiencia":
      return content.appendChild(experience());
    case "#/educacion":
      return content.appendChild(education());
    case "#/contacto": {
      return content.appendChild(contact());
    }
    default:
      return console.log("404")
  }
}

export { router };