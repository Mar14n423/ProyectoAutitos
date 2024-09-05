class Superficie {
    constructor(filas, columnas) {
      this.filas = filas;
      this.columnas = columnas;
    }

    mostrarSuperficie() {
        return [this.filas, this.columnas];
    }
    validarLaSuperficie()
    {
      return this.filas > 0 && this.columnas > 0;
    }
    validarPosicion(x, y) {
      return x >= 0 && x < this.filas && y >= 0 && y < this.columnas;
  }
  
}

export default Superficie;
