class Autito {
    constructor(posX, posY, direccion){
        this.posX=posX;
        this.posY=posY;
        this.direccion = direccion;
    }
    posicionEste(){
        this.direccion = "E";
    }
    posicionOeste(){
        this.direccion = "O";
    }
    posicionNorte(){
        this.direccion = "N";
    }
    posicionSud(){
        this.direccion = "S";
    }

    ApuntarOeste(){
        this.direccion = "O";
    }
    GirarDerecha(){
        if(this.direccion === "N"){
            this.direccion = "E";
        }
    }
}



export default Autito;