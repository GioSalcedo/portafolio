import views from "../views/acerca-de-mi.html"

export default () => {
  const divElement = document.createElement("div")
  divElement.innerHTML = views;

  return divElement;
}