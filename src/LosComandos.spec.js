import mostrarLosComandos from "./LosComandos.js";
import Superficie from "./Superficie.js";


describe("Comandos del auto para que se defina el grid y se inicialice el auto", () => {
  it("Se deberia mostrar el comando ingresado por el usuario", () => {
    const result = mostrarLosComandos("5,5/1,2N/IAIAIAIAA")
    expect(result).toEqual("5,5/1,2N/IAIAIAIAA");
  });
});

describe("Superficie", () => {
  it("Deberia mostrar las dimensiones especificas de la superfice", () => {
    const superficie = new Superficie(3, 3)
    expect(superficie.mostrarSuperficie()).toEqual([3, 3]);
  });
  it("Debería verificar si las filas son mayores a 0", () => {
    const superficie = new Superficie(3, 3);
    expect(superficie.validarLaSuperficie()).toEqual(true);
  });
});
