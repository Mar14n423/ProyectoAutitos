import Autito from "./AutoMovimiento.js"
import Superficie from "./Superficie.js";

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
function obtenerPosicionInicial(posicionInicial) {
  const [x, y] = posicionInicial.slice(0, -1).split(',').map(Number);
  const direccion = posicionInicial.slice(-1);
  return { x, y, direccion };
}
function obtenerMovimientos(comandosMovimiento) {
  return comandosMovimiento.split('');
}

export default {muestraComando,ComandosACargar, obtenerDimensiones,obtenerPosicionInicial,obtenerMovimientos,};
