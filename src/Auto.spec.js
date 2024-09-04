import Autito from "./AutoMovimiento.js"; // Importa la clase con el nombre correcto

describe("Verificar clase Autito", () => {
    it("Debería verificar que la clase se creó correctamente", () => {
        const Auto = new Autito(0, 0, "N");
        
        expect(Auto instanceof Autito).toBe(true);
        expect(Auto.posX).toBe(0);
        expect(Auto.posY).toBe(0);
        expect(Auto.direccion).toBe("N");
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

    it("El autito apuntando al Este, si gira a la derecha, debería apuntar al Sur", () => {
        const Auto = new Autito(0, 0, "E");
        Auto.girarDerecha();
        expect(Auto.direccion).toEqual("S");
    });

    it("El autito apuntando al Sur, si gira a la derecha, debería apuntar al Oeste", () => {
        const auto = new Autito(0, 0, "S");
        auto.girarDerecha();
        expect(auto.direccion).toEqual("O");
    });

    it("El autito apuntando al Oeste, si gira a la derecha, debería apuntar al Norte", () => {
        const auto = new Autito(0, 0, "O");
        auto.girarDerecha();
        expect(auto.direccion).toEqual("N");
    });
   
});
