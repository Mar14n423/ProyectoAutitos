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
    girarDerecha() {
        if (this.direccion === "N") {
            this.posicionEste();
        } else if (this.direccion === "E") {
            this.posicionSud();
        } else if (this.direccion === "S") {
            this.posicionOeste();
        } else if (this.direccion === "O") {
            this.posicionNorte();
        } else{
            return false;
        }

    }

    girarIzquierda() {
        if(this.direccion === "N"){
            this.direccion = "O";
        }
        else if(this.direccion === "S"){
            this.direccion = "E";
        }
        else if(this.direccion === "O"){
            this.direccion = "S";
        }
        else if(this.direccion === "E"){
            this.direccion = "N";
        } else{
            return false;
        }
    }

    AvanzarEnY(){

        if(this.direccion === "N")
            {
                this.posY++;
                return this.posX + "," + this.posY + this.direccion;
                
            } else if(this.direccion === "E"){
                this.posX++;
                return this.posX + "," + this.posY + this.direccion;
            }
            else {
                return false
            }
    }
}




export default Autito;