import views from "../views/experience.html"

export default () => {
  const divElement = document.createElement("div")
  divElement.innerHTML = views;

  return divElement;
}