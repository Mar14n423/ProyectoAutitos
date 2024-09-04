import Autito from "./AutoMovimiento.js"

function muestraComando(comando) {
  return comando;
}
function ComandosACargar(comando){
  const [dimensionesSuperficie, posicionInicial, comandosMovimiento] = comando.split('/');
  return [dimensionesSuperficie,posicionInicial,comandosMovimiento];
}
export default {muestraComando,ComandosACargar, Autito};
