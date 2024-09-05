import Autito from "./AutoMovimiento.js"; // Importa la clase con el nombre correcto

describe("Verificar clase Autito", () => {
  it("Debería verificar que la clase se creó correctamente", () => {
    const Auto = new Autito(0, 0, "N");
        
    expect(Auto instanceof Autito).toBe(true);
    expect(Auto.posX).toBe(0);
    expect(Auto.posY).toBe(0);
    expect(Auto.direccion).toBe("N");
  });
  it("Debería obtener la posición actual del auto", () => {
    const Auto = new Autito(1,2, "N");
    expect(Auto.obtenerPosicion()).toBe("1,2N");
  });

  it("El auto deberia apuntar hacia el Este", () => {
    const Auto = new Autito();
    Auto.posicionEste();
    expect(Auto.direccion).toEqual("E");
  });

  it("El auto deberia apuntar hacia el Oeste", () => {
    const Auto = new Autito();
    Auto.posicionOeste();
    expect(Auto.direccion).toEqual("O");
  });

  it("El auto deberia apuntar hacia el Norte", () => {
    const Auto = new Autito();
    Auto.posicionNorte();
    expect(Auto.direccion).toEqual("N");
  });

  it("El auto deberia apuntar hacia el Sud", () => {
    const Auto = new Autito();
    Auto.posicionSud();
    expect(Auto.direccion).toEqual("S");
  });
  it("El autito apuntando al Norte, si gira a la derecha, debería apuntar al Este", () => {
    const Auto = new Autito();
    Auto.posicionNorte();
    Auto.girarDerecha();
    expect(Auto.direccion).toEqual("E");
    });

  it("El auto apuntando al Este, si gira a la derecha, debería apuntar al Sur", () => {
    const Auto = new Autito(0, 0, "E");
    Auto.girarDerecha();
    expect(Auto.direccion).toEqual("S");
  });

  it("El auto apuntando al Sur, si gira a la derecha, debería apuntar al Oeste", () => {
    const Auto = new Autito(0, 0, "S");
    Auto.girarDerecha();
    expect(Auto.direccion).toEqual("O");
  });

  it("El auto apuntando al Oeste, si gira a la derecha, debería apuntar al Norte", () => {
    const Auto = new Autito(0, 0, "O");
    Auto.girarDerecha();
    expect(Auto.direccion).toEqual("N");
  });

  it("El auto apuntando al norte, si gira a la izquierda, deberia apuntar al oeste", () => {
    const Auto = new Autito();
    Auto.posicionNorte();
    Auto.girarIzquierda();
    expect(Auto.direccion).toEqual("O");
  });

  it("El auto apuntando al sur, si gira a la izquierda, deberia apuntar al este", () => {
    const Auto = new Autito();
    Auto.posicionSud();
    Auto.girarIzquierda();
    expect(Auto.direccion).toEqual("E");
  });

  it("El auto apuntando al oeste, si gira a la izquierda, deberia apuntar al sur", () => {
    const Auto = new Autito();
    Auto.posicionOeste();
    Auto.girarIzquierda();
    expect(Auto.direccion).toEqual("S");
  });

  it("El auto apuntando al este, si gira a la izquierda, deberia apuntar al norte", () => {
    const Auto = new Autito();
    Auto.posicionEste();
    Auto.girarIzquierda();
    expect(Auto.direccion).toEqual("N");
  });

  it("El auto no gira a una coordenada correcta, deberia retornar falso ", () => {
    const Auto = new Autito(1,2,"d");
    expect(Auto.girarDerecha()).toEqual(false);
  });

  it("El auto no gira a una coordenada correcta, deberia retornar falso ", () => {
    const Auto = new Autito(1,2,"d");
    expect(Auto.girarIzquierda()).toEqual(false);
  });

  it("Cuando el auto avanza al norte sube una posicion en y,", () => {
    const Auto = new Autito(3,4,"N");
    expect(Auto.Avanzar()).toEqual("3,5N");
  });

  it("Si el auto NO avanza al norte entonces deberia dar falso", () => {
    const Auto = new Autito(1,2,"a");
    expect(Auto.Avanzar()).toEqual(false);
  });

  it("Si el auto avanza al este entonces deberia subir una posicion en x", () => {
    const Auto = new Autito(3,2,"E");
    expect(Auto.Avanzar()).toEqual("4,2E");
  });

  it("Si el auto avanza al sur entonces deberia bajar una posicion en y", () => {
    const Auto = new Autito(1,4,"S");
    expect(Auto.Avanzar()).toEqual("1,3S");
  });

  it("Si el auto avanza al oeste entonces deberia bajar una posicion en x", () => {
    const Auto = new Autito(4,2,"O");
    expect(Auto.Avanzar()).toEqual("3,2O");
  });
  it("Debería respaldar el estado del auto correctamente", () => {
    const Auto = new Autito(2,2,"O");
    const nuevoEstado = new Autito(4,5,"N");
      Auto.GuardarEstado(nuevoEstado)
      expect(Auto.obtenerPosicion()).toEqual("4,5N");
  });
  it("Debería validar movimientos correctamente", () => {
    const auto = new Autito();
    expect(auto.validarMovimiento("A")).toBe(true);
    expect(auto.validarMovimiento("I")).toBe(true);
    expect(auto.validarMovimiento("D")).toBe(true);
    expect(auto.validarMovimiento("X")).toBe(false);
  });


});
describe("Verificar AvanzarOGirar(Izquierda o Derecha)", () => {
  it("Debería avanzar cuando se le pasa el comando 'A'", () => {
      const Auto = new Autito();
      jest.spyOn(Auto, 'Avanzar'); 
      Auto.MovimientosGA("A");
      expect(Auto.Avanzar).toHaveBeenCalled(); 
  });
  it("Debería girar a la derecha cuando se le pasa el comando 'D'", () => {
    const auto = new Autito();
    jest.spyOn(auto, 'girarDerecha');
    auto.MovimientosGA("D");
    expect(auto.girarDerecha).toHaveBeenCalled(); 
  });

});
