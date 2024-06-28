import views from "../views/projects.html"

export default () => {
  const divElement = document.createElement("div")
  divElement.innerHTML = views;

  return divElement;
}