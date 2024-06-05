import {Animal} from "./animal.js";
export class Serpiente extends Animal {
    constructor(nombre,edad,img,comentario,sonido){
        super(nombre,edad,img,comentario,sonido);
    }
    sisear(){
        return this.sonido;
    }
    
}