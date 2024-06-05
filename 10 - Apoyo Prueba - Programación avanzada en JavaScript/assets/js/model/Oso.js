import {Animal} from "./animal.js";
export class Oso extends Animal {
    constructor(nombre,edad,img,comentario,sonido){
        super(nombre,edad,img,comentario,sonido);
    }
    grunir(){
        return this.sonido;
    }
}