class Autito {
    constructor(posX, posY, direccion){
        this.posX=posX;
        this.posY=posY;
        this.direccion = direccion;
    }
    posicionEste(){
        this.direccion = "E";
    }
}

export default Autito;