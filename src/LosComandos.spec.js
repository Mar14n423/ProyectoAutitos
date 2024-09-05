import Comandos from "./LosComandos.js";
import Superficie from "./Superficie.js";
import Autito from "./AutoMovimiento.js"

describe("Comandos del auto para que se defina el grid y se inicialice el auto", () => {
  it("Se deberia mostrar el comando ingresado por el usuario", () => {
    const result = Comandos.muestraComando("5,5/1,2N/IAIAIAIAA")
    expect(result).toEqual("5,5/1,2N/IAIAIAIAA");
  });
  it("Debería procesar el comando ingresado y devolver la posicion inicial", () => {
    const result = Comandos.ComandosACargar("5,5/1,2N/IAIAIAIAA")
    expect(result[1]).toEqual("1,2N");
  });
  it("Debería desglosar las dimensiones de la superficie en filas y columnas", () => {
    const result = Comandos.obtenerDimensiones("5,7");
    expect(result).toEqual({ filas: 5, columnas: 7 });
  });
  it("Debería desglosar la posición inicial en coordenadas y dirección", () => {
    const result = Comandos.obtenerPosicionInicial("1,2N");
    expect(result).toEqual({ x: 1, y: 2, direccion: "N" });
  });
  it("Debería desglosar los movimientos en una lista de acciones", () => {
    const result = Comandos.ComandosACargar("5,5/1,2N/IAIAIAIAA");
    const movimientos = Comandos.obtenerMovimientos(result[2]);
    expect(movimientos).toEqual(["I", "A", "I", "A", "I", "A", "I", "A", "A"]);
  });
  it("Debería procesar el comando ingresado y devolver la posicion final del autito", () => {
    const result = Comandos.procesarInstruccion("5,5/3,3N/IADA")
    expect(result).toEqual("2,4N");
  });
  
});
//Aqui las pruebas de la Superficie
describe("Superficie", () => {
  it("Deberia mostrar las dimensiones especificas de la superficie", () => {
    const superficie = new Superficie(3, 3)
    expect(superficie.mostrarSuperficie()).toEqual([3, 3]);
  });
  it("Debería verificar si las filas y las columnas son mayores a 0", () => {
    const superficie = new Superficie(3, 3);
    expect(superficie.validarLaSuperficie()).toEqual(true);
  });
  it("Debería verificar si la superficie no es válida (que las filas sean menores a 0)", () => {
    const superficie = new Superficie(-5, 3);
    expect(superficie.validarLaSuperficie()).toEqual(false);
  });
  it("Debería verificar si la superficie no es válida (que las columnas sean menores a 0)", () => {
    const superficie = new Superficie(3, -1);
    expect(superficie.validarLaSuperficie()).toEqual(false);
  });
  it("Debería verificar si la posición del autito está dentro de los límites de la superficie", () => {
    const superficie = new Superficie(5, 5);
    expect(superficie.validarPosicion(3, 3)).toEqual(true);  // Dentro de los límites
    expect(superficie.validarPosicion(6, 3)).toEqual(false); // Fuera de los límites (x fuera)
    expect(superficie.validarPosicion(3, 6)).toEqual(false); // Fuera de los límites (y fuera)
  });
  
});
