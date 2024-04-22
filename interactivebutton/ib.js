const button = document.getElementById("button");
// Definir a cor, pois o js não consegue obter a cor do css
button.style.backgroundColor = "blue";

button.addEventListener("click", () => {
    console.log(button.style.backgroundColor);
  if (button.style.backgroundColor == "blue") {
    button.style.backgroundColor = "red";
  } else {
    button.style.backgroundColor = "blue";
  }
});