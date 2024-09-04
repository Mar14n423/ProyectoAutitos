import Autito from "./AutoMovimiento.js"; // Importa la clase con el nombre correcto

describe("Verificar clase Autito", () => {
    it("Debería verificar que la clase se creó correctamente", () => {
        const Auto = new Autito(0, 0, "N");
        
        expect(Auto instanceof Autito).toBe(true);
        expect(Auto.posX).toBe(0);
        expect(Auto.posY).toBe(0);
        expect(Auto.direccion).toBe("N");
    });
});
