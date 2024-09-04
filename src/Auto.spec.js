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
});
