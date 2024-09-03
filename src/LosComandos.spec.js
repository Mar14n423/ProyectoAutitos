import mostrarLosComandos from "./LosComandos.js";

describe("Comandos del auto para que se defina el grid y se inicialice el auto", () => {
  it("Se deberia mostrar el comando ingresado por el usuario", () => {
    const result = mostrarLosComandos("5,5/1,2N/IAIAIAIAA")
    expect(result).toEqual("5,5/1,2N/IAIAIAIAA");
  });
});