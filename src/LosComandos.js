import Autito from "./AutoMovimiento.js"

function muestraComando(comando) {
  return comando;
}
function ComandosACargar(comando){
  const [dimensionesSuperficie, posicionInicial, comandosMovimiento] = comando.split('/');
  return [dimensionesSuperficie,posicionInicial,comandosMovimiento];
}
function obtenerDimensiones(dimensionesSuperficie) {
  const [filas, columnas] = dimensionesSuperficie.split(',').map(Number);
  return { filas, columnas };
}
export default {muestraComando,ComandosACargar, obtenerDimensiones};
