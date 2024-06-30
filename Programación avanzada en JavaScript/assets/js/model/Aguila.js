import {Animal} from "./animal.js";

export class Aguila extends Animal {
    constructor(nombre,edad,img,comentario,sonido){
        super(nombre,edad,img,comentario,sonido);
    }
    chillar(){
        return this.sonido;
    }
}