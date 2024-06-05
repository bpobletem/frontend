import {Animal} from "./animal.js";
export class Lobo extends Animal {
    constructor(nombre,edad,img,comentario,sonido){
        super(nombre,edad,img,comentario,sonido);
    }
    aullar(){
        return this.sonido;
    }
}