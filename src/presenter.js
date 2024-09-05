import Comandos from "./LosComandos.js";

const comandoInput = document.querySelector("#comando");
const form = document.querySelector("#comando-form");
const divResultado = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar el comportamiento por defecto del form

  const comando = comandoInput.value; // Obtener el comando ingresado
  if (!comando) {
    divResultado.innerHTML = "<p>Por favor, ingresa un comando válido.</p>";
    return;
  }

  try {
    // Procesar el comando con tu lógica
    const posInicial = Comandos.ComandosACargar(comando);
    const resultadoFinal = Comandos.procesarInstruccion(comando);

    // Mostrar los resultados
    divResultado.innerHTML = `
      <p>Posición inicial: ${posInicial[1]}</p>
      <p>Comando realizado: ${comando}</p>
      <p>Posición final: ${resultadoFinal}</p>
    `;
  } catch (error) {
    // Manejar errores y mostrarlos
    console.error(error);
    divResultado.innerHTML = "<p>Ocurrió un error al procesar el comando.</p>";
  }
});
