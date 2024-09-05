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
function procesarInstruccion(comando) {
  const b = ComandosACargar(comando);
  const dimension = obtenerDimensiones(b[0]);
  const posicionInicial = obtenerPosicionInicial(b[1]);
  const movimientos = obtenerMovimientos(b[2]);

  const superficie = new Superficie(dimension.filas, dimension.columnas);
  let Auto = new Autito(posicionInicial.x, posicionInicial.y, posicionInicial.direccion);

  for (const movimiento of movimientos) {
    if (Auto.validarMovimiento(movimiento)) {
      Auto.MovimientosGA(movimiento);
    }
  }

  return Auto.obtenerPosicion();
}
export default {muestraComando,ComandosACargar, obtenerDimensiones,obtenerPosicionInicial,obtenerMovimientos,procesarInstruccion};
