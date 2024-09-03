import mostrarLosComandos from "./LosComandos.js";
import Superficie from "./Superficie.js";


describe("Comandos del auto para que se defina el grid y se inicialice el auto", () => {
  it("Se deberia mostrar el comando ingresado por el usuario", () => {
    const result = mostrarLosComandos("5,5/1,2N/IAIAIAIAA")
    expect(result).toEqual("5,5/1,2N/IAIAIAIAA");
  });
});

describe("Superficie", () => {
  it("Deberia mostrar el area de la superfice", () => {
    const result = new Superficie(3, 3)
    expect(result.mostrarSuperficie()).toEqual([3, 3]);
  });
});

it("Deberia verificar si la fila es mayor 0", () => {
  const result = new Superficie(3, 3)
  expect(result.validarSuperficie()).toEqual(true);
});