import views from "../views/education.html"

export default () => {
  const divElement = document.createElement("div")
  divElement.innerHTML = views;

  return divElement;
}