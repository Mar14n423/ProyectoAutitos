import comandosACargar from "./LosComandos.js";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comando-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const resultado = comando.value
  const posInicial = comandosACargar(resultado);
  div.innerHTML = "<p> Posicion inicial: "+ posInicial[1]+  "<br> Comando realizado: " + posInicial[2] + "</br> Posicion final: " + ejecutar(resultado) +"</p>";
});
