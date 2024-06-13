export default () => {
  const views = `
    <h1>Hola</h1>
  `;
  
  const divElement = document.createElement("div")
  divElement.innerHTML = views;

  return divElement;
}