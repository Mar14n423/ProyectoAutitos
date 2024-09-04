class Superficie {
    constructor(filas, columnas) {
      this.filas = filas;
      this.columnas = columnas;
    }

    mostrarSuperficie() {
        return [this.filas, this.columnas];
    }
    validarLaSuperficie(){
      return this.filas > 0;
    }
  
}

  export default Superficie;
