import mostrarLosComandos from "./LosComandos.js";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comando-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const resultado = comando.value

  div.innerHTML = "<p> Comando realizado: " + mostrarLosComandos(resultado) + "</p>";
});
