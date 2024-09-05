class Autito {
    constructor(posX, posY, direccion){
        this.posX=posX; 
        this.posY=posY;
        this.direccion = direccion;
    }
    obtenerPosicion() 
    {
        return this.posX +","+ this.posY + this.direccion;
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

    Avanzar()
    {
        if(this.direccion === "N")
            {
                this.posY++;
            }
        else if(this.direccion === "E"){
                this.posX++;
            }
        else if(this.direccion === "S"){
                this.posY--;
            }
        else if(this.direccion === "O")
            {
                this.posX--;
            }
        else 
        {
            return false;
        }
        let resultado = this.posX + "," + this.posY + this.direccion;
        return resultado;
    }
    GuardarEstado(Auto)//del autito, para que se pueda restablecer su anterior estado, si es necesario
    {
        this.posX = Auto.posX;
        this.posY = Auto.posY;
        this.direccion = Auto.direccion;
    }
    validarMovimiento(movimiento) 
    {
        return ["A", "I", "D"].includes(movimiento);
    }
    MovimientosGA(movimiento) {
        switch (movimiento) 
        {
        case "A":
            this.Avanzar();
            break;
        case "D":
            this.girarDerecha();
            break;
        case "I":
            this.girarIzquierda();
            break;
        default:
            console.log("Movimiento inválido");
        
        }
        
    }
    

}

export default Autito;